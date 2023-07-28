
import { Ability } from './ability';

export interface Unit {
    name: string;
    movement: number;
    toughtness: number;
    save: number;
    wound: number;
    leadership: number;
    objectiveControl: number;
    abilities: Ability[];
  }