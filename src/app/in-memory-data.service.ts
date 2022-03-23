import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1,score:100, name: 'Kirito' },
      { id: 2,score:200, name: 'Kurono' },
      { id: 3,score:300, name: 'Guts' },
      { id: 4,score:50, name: 'The Great Horn' },
      { id: 5,score:1500, name: 'Dog' },
      { id: 6,score:1644, name: 'ginko' },
      { id: 7,score:1745, name: 'Coringa' },
      { id: 8,score:1809, name: 'Akarin' },
      { id: 9,score:1900, name: 'Goku' },
      { id: 10,score:200, name: 'Goku ssj4' },
      { id: 11,score:200, name: 'Hidetaka miyasaki' },
      { id: 12,score:20000, name: 'Ninten' },
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
