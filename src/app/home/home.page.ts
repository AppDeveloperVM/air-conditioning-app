import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { AlertController, NavController } from '@ionic/angular';
import { AirDataService } from '../services/air-data.service';
import { AirConditioner } from './models/air-conditioner.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{

  device: AirConditioner;
  brand: string;
  model: string;
  private airSubscription: Subscription;

  airData: Observable<any>;
  isLoading = false;
  data: any = [];
  updatedData: any = [];

  time = '00:00';
  temp = 0;
  Mode: any = ['Heat', 'Cold', 'Standard']; // modes
  fan: any = [];

  modeIndex: number;
  // hide div = boolean
  standardMode = true;
  heatMode = true;
  coldMode = true;

  swing = true;
  airFlow = true;


  constructor(
    private airdataService: AirDataService,
    private httpClient: HttpClient,
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {
    this.isLoading = true;
    this.airData = this.httpClient.get('https://run.mocky.io/v3/967ef4af-4739-480e-96ca-239888d65b9f');
    this.airData
    .subscribe(response => {
      console.log('my data: ', response);
      this.data = response.data;
      this.isLoading = false;
      this.updatedData = this.data;
      this.setTime();
      this.setTemp();
      this.setMode();
    });

  }

  ngOnInit() {
    this.isLoading = true;

    this.airSubscription = this.airdataService
    .getAirConditioner(this.brand, this.model)
    .subscribe( device => {
      this.device = device;
      this.isLoading = false;

    }, error => {
      this.alertCtrl
      .create({
        header: 'An error ocurred!',
        message: 'Could not load data. Try again later.',
        buttons : [{
          text: 'Okay',
          // handler: () => {
            //
          // }
        }]
      }).then(alertEl => {
        alertEl.present();
      });
    });
  }

  setTime(){
    this.time = this.updatedData.time;
    console.log('time:' + this.time);
  }

  setTemp(){
    this.temp = this.updatedData.temp;
    console.log('temp:' + this.temp);
  }

  tempUp(){
    let newTemp;
    newTemp = this.temp++;
    this.updatedData.temp = newTemp;
    console.log('temp:' + newTemp);
    return newTemp;
  }

  tempDown() {
    let newTemp;
    newTemp = this.temp--;
    this.updatedData.temp = newTemp;
    console.log('temp:' + this.temp);
    return newTemp;
  }

  setMode(){
    let modeIndex;
    modeIndex = this.modeIndex;
    console.log('mode value:' + modeIndex);
    if (isNaN(modeIndex)){
      modeIndex = 0;
    }
    if (modeIndex > 2){
      modeIndex = 0;
    }
    console.log('mode value:' + modeIndex);

    switch (modeIndex){
      case 0:
        this.standardMode = false;
        this.heatMode = true;
        this.coldMode = true;
        break;
      case 1:
        this.standardMode = true;
        this.heatMode = false;
        this.coldMode = true;
        break;
      case 2:
        this.standardMode = true;
        this.heatMode = true;
        this.coldMode = false;
        break;
    }
    modeIndex++;
    this.modeIndex = modeIndex;
  }

  setFan(){
    let modeIndex;
    modeIndex = this.modeIndex;
    console.log('mode value:' + modeIndex);
    if (isNaN(modeIndex)){
      modeIndex = 0;
    }
    if (modeIndex > 2){
      modeIndex = 0;
    }
    console.log('mode value:' + modeIndex);

    switch (modeIndex){
      case 0:
        this.standardMode = false;
        this.heatMode = true;
        this.coldMode = true;
        break;
      case 1:
        this.standardMode = true;
        this.heatMode = false;
        this.coldMode = true;
        break;
      case 2:
        this.standardMode = true;
        this.heatMode = true;
        this.coldMode = false;
        break;
    }
    modeIndex++;
    this.modeIndex = modeIndex;
  }

  setSwing(){
    if (this.swing){
      this.swing = false;
    } else {
      this.swing = true;
    }
    console.log('swing: ' + this.swing);
  }

  setAirFlow(){
    if (this.airFlow){
      this.airFlow = false;
    }else{
      this.airFlow = true;
    }
    console.log('air flow: ' + this.airFlow);
  }

  getState() {
    return this.httpClient.get('');
  }

  ngOnDestroy() {
    if (this.airSubscription) {
      this.airSubscription.unsubscribe();
    }
  }

}
