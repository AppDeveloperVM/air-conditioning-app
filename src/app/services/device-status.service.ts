import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { stringify } from 'querystring';
import { BehaviorSubject, Subscription } from 'rxjs';
import { take, map, delay, tap, switchMap } from 'rxjs/operators';
import { AirConditioner } from '../home/models/air-conditioner.model';

interface DeviceStatusData {
  time: string;
  temp: number;
  mode: string;
  fan: string;
}

@Injectable({
  providedIn: 'root'
})
export class DeviceStatusService {

  airConditioner: AirConditioner;
  airConditionerId: string;
  isLoading = false;
  private airConditionerSub: Subscription;


  constructor(
    private http: HttpClient,
    private alertCtrl: AlertController
  ) { }

  setDeviceStatus(id: string) {
    //set time by actual time or the device already set time?
    //set temp, mode, fan
  }

  getDeviceStatus(id: string) {
    
  }

  updateStatus(
    time: string,
    temp: Number,
    mode: string,
    fan: string
  ) {
    let updatedDeviceStatus: AirConditioner[];

  }


}
