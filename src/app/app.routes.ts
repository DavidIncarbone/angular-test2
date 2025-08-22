import { Routes } from '@angular/router';
import { authGuardChild } from './auth/auth-guard';
import { About } from './componenti/about/about';
import { Contact } from './componenti/contact/contact';
import { Contatti } from './componenti/contatti/contatti';
import { Contatto } from './componenti/contatto/contatto';
import { Home } from './componenti/home/home';
import { NotFound } from './componenti/not-found/not-found';
import { Signup } from './componenti/signup/signup';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/homepage' },
  { path: 'homepage', component: Home },
  { path: 'signup', component: Signup },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  {
    path: 'contatti',
    component: Contatti,
    canActivateChild: [authGuardChild],
    children: [
      {
        path: ':id',
        component: Contatto,
      },
    ],
  },
  { path: '404', component: NotFound },
  { path: '**', redirectTo: '/404' },
  // { path: 'contatti/:id', component: Contatti },
];
