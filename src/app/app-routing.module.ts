import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { AddPackageComponent } from './Oparation-Modules/components/add-package/add-package.component';
import { PackagDetailsComponent } from './Oparation-Modules/components/packag-details/packag-details.component';
import { PackagListComponent } from './Oparation-Modules/components/packag-list/packag-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'category', component: SingleCategoryComponent},
  {path: 'SinglePost', component: SinglePostComponent},
  {path: 'SinglePostPackage', component: AddPackageComponent},
  

  {path: 'about', component: AboutUsComponent},
  {path: 'term-conditons', component: TermsAndConditionComponent},
  {path: 'contact', component: ContactUsComponent},

  ////////////////

  {path: 'packages', component: PackagListComponent},
  {path: 'packages/:id', component: PackagDetailsComponent},
  {path: 'add', component: AddPackageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
