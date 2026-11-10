import { Cours, COURS } from '../../donnees/cours';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FiltreCoursPipe } from '../../pipes/filtre-cours-pipe';
import { UpperCasePipe } from '@angular/common';
import { TriCoursPipe } from '../../pipes/tri-cours-pipe';
import { PlacesRestantesPipe } from '../../pipes/places-restantes-pipe';
import { TronquerPipe } from '../../pipes/tronquer-pipe';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-liste-cours',
  standalone: true,
  imports: [
  FormsModule,
  FiltreCoursPipe,
  TriCoursPipe,
  UpperCasePipe,
  PlacesRestantesPipe,
  TronquerPipe,
  RouterLink
],
  templateUrl: './liste-cours.html',
  styleUrl: './liste-cours.css'
})
export class ListeCoursComponent {
  recherche = '';
  tri: 'asc' | 'desc' = 'asc';

cours: Cours[] = COURS;

}