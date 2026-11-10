import { Component } from '@angular/core';
import { EnTete } from './composants/en-tete/en-tete';
import { ListeCoursComponent } from './composants/liste-cours/liste-cours';
import { PiedPage } from './composants/pied-page/pied-page';
import { DetailCours } from './composants/detail-cours/detail-cours';
import { Cours } from './donnees/cours';
import {RouterOutlet,RouterLink,RouterLinkActive} from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from './services/session';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    EnTete,
    ListeCoursComponent,
    PiedPage,
    DetailCours,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
coursSelectionne: Cours | null = null;

  recevoirCours(c: Cours) {
    this.coursSelectionne = c;}
    session = inject(Session);

private router = inject(Router);

deconnecter() {

  this.session.deconnecter();

  this.router.navigateByUrl('/');

}
}