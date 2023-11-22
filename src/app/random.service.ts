import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  randomNumber(max: number): number {
    var randomValue = Math.random();

    return Math.floor(randomValue * max) + 1;
  }


  constructor() { }
}
