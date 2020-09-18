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
        return {...airconditioners.find(a => a.brand === brand,a =>  a.model === model)}
      })
    )
  }

  fetchAirConditioners(){
    /*return this.http
        .get<{ [key: string]: CosplayGroupData}>(
            `https://cosplay-planning-app.firebaseio.com/cosplay-groups.json?orderBy="userId"&equalTo="${
            this.authService.userId
            }"`
        )
        .pipe(
            map(CosplayGroupData => {
                const cosplayGroups = [];
                for (const key in CosplayGroupData) {
                    if (CosplayGroupData.hasOwnProperty(key)) {
                        cosplayGroups.push(new CosplayGroup(
                            key,
                            CosplayGroupData[key].title,
                            CosplayGroupData[key].series,
                            CosplayGroupData[key].imageUrl,
                            CosplayGroupData[key].place,
                            new Date(CosplayGroupData[key].availableFrom),
                            new Date(CosplayGroupData[key].availableTo),
                            CosplayGroupData[key].userId,
                            CosplayGroupData[key].location
                            )
                        );
                    }
                }
                return cosplayGroups;
            }), tap(cosplaygroups => {
                this._cosplaygroups.next(cosplaygroups);
            })
        );*/
  }


}



