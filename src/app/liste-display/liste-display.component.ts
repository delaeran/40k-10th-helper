import { Component } from '@angular/core';
import {Unite} from '../unit';

@Component({
  selector: 'app-liste-display',
  templateUrl: './liste-display.component.html',
  styleUrls: ['./liste-display.component.css']
})
export class ListeDisplayComponent {

  dunecrawler:Unite = {
    name:"Onager Dunecrawler",
    movement: 8,
    toughtness: 10,
    save: 2,
    wound: 11,
    leadership: 7,
    objectiveControl: 3
  }
}
