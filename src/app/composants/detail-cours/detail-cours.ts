import { Component, Input } from '@angular/core';
import { Cours } from '../liste-cours/liste-cours';

@Component({
  selector: 'app-detail-cours',
  standalone: true,
  imports: [],
  templateUrl: './detail-cours.html',
  styleUrl: './detail-cours.css'
})
export class DetailCoursComponent {

  @Input() cours: Cours | null = null;

}