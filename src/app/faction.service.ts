import { Injectable } from '@angular/core';
import { Faction } from './faction';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FactionService {

  constructor() { 
  }


    getFactions(): Observable<Faction[]> {
      
    const ListeFactions: Faction[] = [
      { id: 1, name: 'Adepta Sororitas - Soeur de Bataille', affiliation:'Imperium' },
      { id: 2, name: 'Adeptus Astartes - Space Marines', affiliation:'Imperium' },
      { id: 3, name: 'Adeptus Custodes', affiliation:'Imperium' },
      { id: 4, name: 'Adeptus Mechanicus', affiliation:'Imperium' },
      { id: 5, name: 'Agents of the imperium', affiliation:'Imperium' },
      { id: 6, name: 'Astra Militarium - Garde Impériale', affiliation:'Imperium' },
      { id: 7, name: 'Black Templar', affiliation:'Imperium' },
      { id: 8, name: 'Blood Angels', affiliation:'Imperium' },
      { id: 9, name: 'Chaos Daemons', affiliation:'Chaos' },
      { id: 10, name: 'Chaos Knights', affiliation:'Chaos' },
      { id: 11, name: 'Chaos Space Marines', affiliation:'Chaos' },
      { id: 12, name: 'Dark Angels', affiliation:'Imperium' },
      { id: 13, name: 'Death Guard', affiliation:'Chaos' },
      { id: 14, name: 'Deathwatch' , affiliation:'Imperium'},
      { id: 15, name: 'Drukhari', affiliation:'Xenos' },
      { id: 16, name: 'Genestealer Cult', affiliation:'Xenos' },
      { id: 17, name: 'Grey Knights', affiliation:'Imperium' },
      { id: 18, name: 'Imperial Knights', affiliation:'Imperium' },
      { id: 19, name: 'League of Votann', affiliation:'Votann' },
      { id: 20, name: 'Necrons', affiliation:'Xenos' },
      { id: 21, name: 'Orks', affiliation:'Xenos' },
      { id: 22, name: 'Space Wolves', affiliation:'Imperium' },
      { id: 23, name: 'Tau Empire', affiliation:'Xenos' },
      { id: 24, name: 'Thousand Sons', affiliation:'Chaos' },
      { id: 25, name: 'Tyranis', affiliation:'Xenos' },
      { id: 26, name: 'World Eaters', affiliation:'Chaos' }
    ];
      return of(ListeFactions);
    }
}
