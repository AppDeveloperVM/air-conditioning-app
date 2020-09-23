import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { AlertController, NavController } from '@ionic/angular';
import { AirDataService } from '../services/air-data.service';
import { AirConditioner } from './models/air-conditioner.model';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{

  API = 'https://ddae5242-5a5a-4ba9-b9c6-9e2bcb433d93.mock.pstmn.io';

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
  fanSpeed: number;

  fan1 = true;
  fan2 = true;
  fan3 = true;
  fan4 = true;


  constructor(
    private airdataService: AirDataService,
    private httpClient: HttpClient,
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {
    this.isLoading = true;
    this.getStatus();
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

  getStatus() {
    this.airData = this.httpClient.get(`${this.API}/status`);
    this.airData
    .subscribe(response => {
      console.log('my data: ', response);
      this.data = response.status; // previusly response.data
      this.isLoading = false;
      this.updatedData = this.data;
      this.setTime();
      this.setTemp();
      this.setMode();
      this.setFanSpeed();
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
    newTemp = this.updatedData.temp ;
    newTemp = this.temp++;
    this.updatedData.temp = newTemp;
    console.log('temp:' + newTemp);
  }

  tempDown() {
    let newTemp;
    newTemp = this.updatedData.temp ;
    newTemp = this.temp--;
    this.updatedData.temp = newTemp;
    console.log('temp:' + newTemp);
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

  setFanSpeed(){
    let fanActualSpeed;
    fanActualSpeed = this.updatedData.fan_speed;
    if (fanActualSpeed === 5){
      fanActualSpeed = 1;
    }
    console.log('fan speed: ' + fanActualSpeed);

    switch (fanActualSpeed){
      case 1:
        this.fan1 = false;
        this.fan2 = true;
        this.fan3 = true;
        this.fan4 = true;
        break;
      case 2:
        this.fan1 = false;
        this.fan2 = false;
        this.fan3 = true;
        this.fan4 = true;
        break;
      case 3:
        this.fan1 = false;
        this.fan2 = false;
        this.fan3 = false;
        this.fan4 = true;
        break;
      case 4:
        this.fan1 = false;
        this.fan2 = false;
        this.fan3 = false;
        this.fan4 = false;
        break;
    }

    fanActualSpeed++;
    this.updatedData.fan_speed = fanActualSpeed;
    this.fanSpeed = fanActualSpeed;
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

  updateStatus() {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // let params = new HttpParams().append('id': "");
    const options = { headers }; // second param, "params"

    return this.httpClient
    .put(`${this.API}/updateStatus`, null, options)
    .pipe(
      map((response: Response) => {
        /*const status : new DeviceStatus[] = response.json();
        return recipe;*/
      }),
      tap((/*status: DeviceStatus[]*/) => {
          // this.recipeService.setRecipes(recipes);
      })
    );
  }

  ngOnDestroy() {
    if (this.airSubscription) {
      this.airSubscription.unsubscribe();
    }
  }

}
