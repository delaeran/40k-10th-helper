import { Component } from '@angular/core';
import { Faction } from '../faction';

@Component({
  selector: 'app-creation-armee',
  templateUrl: './creation-armee.component.html',
  styleUrls: ['./creation-armee.component.css']
})
export class CreationArmeeComponent {
  faction: Faction | null = null;



}
