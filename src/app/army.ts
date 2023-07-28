
import { Faction } from './faction';
import { Unit } from './unit';

export class Army {
    name: string = "";
    faction: Faction = {
        id:0,
        name:"",
        affiliation:""
      };
    units: Unit[] = [];
    warlord: Unit|null = null;
    points: number = 0;
}
