import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutUsComponent} from './about-us/about-us.component'
import { ContactUsComponent } from './contact-us/contact-us.component'
import { RegisterComponent } from './register/register.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'about-us', component: AboutUsComponent},
{ path: 'contact-us', component: ContactUsComponent},
{ path: 'register', component: RegisterComponent},
{ path: 'video', component: VideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
