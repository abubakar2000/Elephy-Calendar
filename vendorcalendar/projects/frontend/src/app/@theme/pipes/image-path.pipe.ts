import { Pipe, PipeTransform } from '@angular/core';
import { AppSettings } from '../../@core/config';

@Pipe({
  name: 'imagePath'
})
export class ImagePathPipe implements PipeTransform {
  transform(imageName: any, imageType: string, isThumbnail: boolean = false) {
    if (!imageName) return '#';
    let imageURL: string = AppSettings.UPLOAD_URL;

    if (isThumbnail) imageName = 'thumb-' + imageName;

    switch (imageType) {
      case 'content':
        imageURL += 'contents/';
        break;
      case 'testimonial':
        imageURL += 'testimonials/';
        break;
      case 'package':
        imageURL += 'packages/';
        break;
      case 'user_package':
        imageURL += 'user_packages/';
        break;
      case 'vendor':
        imageURL += 'vendors/';
        break;
      case 'user':
        imageURL += 'users/';
        break;
      case 'vendor_news':
        imageURL += 'vendor_news/';
        break;
      case 'vendor_product':
        imageURL += 'vendor_products/';
        break;
    }

    imageURL += imageName;
    return imageURL;
  }

}
