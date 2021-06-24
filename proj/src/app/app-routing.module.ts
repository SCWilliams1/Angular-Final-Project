import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
//import { PostsComponent } from './posts/posts.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { CategoriesComponent } from './categories/categories.component';
import { DesignComponent } from './design/design.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { BusinessComponent } from './business/business.component';
import { TechnologyComponent } from './technology/technology.component';
import { PhotofilmComponent } from './photofilm/photofilm.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { WritingComponent } from './writing/writing.component';

const routes: Routes = [

  {
    path: '',
    component: InventoryComponent
  },

  //Top Bar
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }, 
  {
    path: 'category',
    component: CategoriesComponent
  }, 
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },

  //sidebar
  {
    path: 'design',
    component: DesignComponent
  },
  {
    path: 'illustration',
    component: IllustrationComponent
  },
  {
    path: 'business',
    component: BusinessComponent
  },
  {
    path: 'technology',
    component: TechnologyComponent
  },
  {
    path: 'photofilm',
    component: PhotofilmComponent
  },
  {
    path: 'enterprise',
    component: EnterpriseComponent
  },
  {
    path: 'writing',
    component: WritingComponent
  },
  /**/
  //Sub Pages
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'thankyou',
    component: ThankyouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
