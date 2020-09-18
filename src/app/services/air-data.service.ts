import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AirConditioner } from '../home/models/air-conditioner.model';
import { take, map, delay, tap, switchMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AirDataService {

  private _airConditioners = new BehaviorSubject<AirConditioner[]>(
    []
  );

  get airconditioners(){
    return this._airConditioners.asObservable();
  }

  constructor() { }

  getAirConditioner(brand: string, model: string) {
    return this._airConditioners.pipe(
      take(1),
      map(airconditioners => {
        return {...airconditioners.find(a => a.brand === brand)}
      })
    )
  }


}



