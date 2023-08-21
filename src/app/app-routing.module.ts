import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home - Little House in the Modern World',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About - Little House in the Modern World',
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'About - Little House in the Modern World',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
