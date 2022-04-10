const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const mysql = require('mysql2');
const config = require('../config.json')
const mailer = require('nodemailer');

// create the connection to database
const connection = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    database: config.database.database,
    password: config.database.password,
    port: config.database.port
});

let transporter = mailer.createTransport({
    host: config.smtpOptions.host,
    port: config.smtpOptions.port,
    secure: false,
    auth: {
        user: config.smtpOptions.auth.user,
        pass: config.smtpOptions.auth.pass,
    },
});


const sendMail = async (from, to, subject, message) => {
    let info = await transporter.sendMail({
        from: `"${from}" <${config.smtpOptions.auth.user}>`, // sender address
        to: `${to}`, // list of receivers
        subject: `${subject}`, // Subject line
        html: `
        <div style="padding: 30pt;background-color: rgb(85 110 231);color: white;">
        <h3>${subject}</h3>
        <p>${message}</p>
    </div>
        `
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", mailer.getTestMessageUrl(info));
}

// routes
router.get('/', async (req, res, next) => {
    connection.query(
        'SELECT * FROM slots',
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            res.send(results)
        }
    );

});


router.post('/add', (req, res, next) => {

    console.log("Added");
    console.log(req.body);
    connection.query(
        `insert into slots(id, addedBy, date, description, reservedWith, time, title, requesterTelephone, requesterEmail, approved, createdAt, updatedAt)
        values("${uuid.v4().toString() + new Date().toDateString() + new Date().toTimeString()}", "${req.body.addedBy}", "${req.body.date}", "${req.body.description}", "${req.body.reservedWith}", 
        "${req.body.time}", "${req.body.title}", "${req.body.requesterTelephone}", "${req.body.requesterEmail}", 0, sysdate(), sysdate())`,
        function (err, results, fields) {
            console.log(err);
            console.log(results); // results contains rows returned by server
            sendMail("ELEPHY", 'abubakar.mughal2ooo@icloud.com', "New Slot Added", 
            `Slot for ${req.body.addedBy} with date ${req.body.date} and time ${req.body.time} was added successfully`).then(_ => {
                console.log("Mail Sent.");
            })
        }
    );
    res.send({ message: "OK" })
})

router.post('/del', (req, res, next) => {
    console.log("Delete");
    console.log(req.body);
    connection.query(
        `delete from slots where id = '${req.body.id}'`,
        function (err, results, fields) {
            console.log(err);
            console.log(results); // results contains rows returned by server
            sendMail("ELEPHY", 'abubakar.mughal2ooo@icloud.com', "Slot Deleted", 
            `Slot for ${req.body.addedBy} with date ${req.body.date} and time ${req.body.time} was deleted`).then(_ => {
                console.log("Mail Sent.");
            })
        }
    );
    res.send({ message: "OK" })
})
router.post('/approve', (req, res, next) => {
    console.log("Approved");
    console.log(req.body);
    connection.query(
        `Update slots Set approved = 1 where id = '${req.body.id}'`,
        function (err, results, fields) {
            console.log(err);
            console.log(results); // results contains rows returned by server
            sendMail("ELEPHY", req.body.requesterEmail, "Approval", 
            `Slot reserved under name ${req.body.reservedWith} with date ${req.body.date} and time ${req.body.time} was approved`).then(_ => {
                console.log("Mail Sent.");
            })
        }
    );
    res.send({ message: "OK" })
})
router.post('/disapprove', (req, res, next) => {
    console.log("Approved");
    console.log(req.body);
    connection.query(
        `Update slots Set approved = 0 where id = '${req.body.id}'`,
        function (err, results, fields) {
            console.log(err);
            console.log(results); // results contains rows returned by server
            sendMail("ELEPHY", req.body.requesterEmail, "Slot disapproved", 
            `Slot reserved under name ${req.body.reservedWith} with date ${req.body.date} and time ${req.body.time} was disapproved. Please select a new one`).then(_ => {
                console.log("Mail Sent.");
            })
        }
    );
    res.send({ message: "OK" })
})
router.post('/reserve', (req, res, next) => {

    console.log("Updated");
    console.log(req.body);
    connection.query(
        `UPDATE slots SET
        updatedAt = sysdate(),
        requesterEmail = '${req.body.requesterEmail}',
        requesterTelephone = '${req.body.requesterTelephone}',
        title = '${req.body.title}',
        reservedWith = '${req.body.reservedWith}',
        description = '${req.body.description}'
        where id='${req.body.id}'`,
        function (err, results, fields) {
            console.log(err);
            console.log(results); // results contains rows returned by server
            sendMail("ELEPHY", req.body.requesterEmail, "Slot reserved", 
            `Slot successfully reserved under name ${req.body.reservedWith} with date ${req.body.date} and time ${req.body.time}`).then(_ => {
                console.log("Mail Sent.");
            })
        }
    );
    res.send({ message: "OK" })

})


module.exports = router;