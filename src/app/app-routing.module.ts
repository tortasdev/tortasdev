import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  { path:'Home', component:HomeComponent},
  {path:'Projects',component:ProjectsComponent},
  {path:'About-us',component:AboutUsComponent},
  {path:'Services',component:ServicesComponent},
  {path:'Contact',component:ContactComponent},
  {path:'**',redirectTo: "home"}
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }