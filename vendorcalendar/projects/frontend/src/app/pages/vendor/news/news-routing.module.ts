import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VendorNewsFormComponent } from './form/form.component';
import { VendorNewsListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: VendorNewsListComponent,
    data: {
      breadcrumb: {
        label: 'News'
      }
    }
  },
  {
    path: 'add',
    component: VendorNewsFormComponent,
    data: {
      action: 'ADD', breadcrumb: {
        label: 'Add News'
      }
    },
  },
  {
    path: 'edit/:newsId',
    component: VendorNewsFormComponent,
    data: {
      action: 'EDIT', breadcrumb: {
        label: 'Update News'
      }
    },
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorNewsRoutingModule { }
