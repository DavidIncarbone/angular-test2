import { Routes } from '@angular/router';
import { About } from './componenti/about/about';
import { Contact } from './componenti/contact/contact';
import { Contatti } from './componenti/contatti/contatti';
import { Contatto } from './componenti/contatto/contatto';
import { Home } from './componenti/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  {
    path: 'contatti',
    component: Contatti,
    children: [
      {
        path: ':id',
        component: Contatto,
      },
    ],
  },
  // { path: 'contatti/:id', component: Contatti },
];
