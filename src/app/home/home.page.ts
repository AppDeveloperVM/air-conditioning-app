import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
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

  // testing API
  API = 'https://ddae5242-5a5a-4ba9-b9c6-9e2bcb433d93.mock.pstmn.io';

  // real url
  deviceUrl = 'http://85.57.77.218:350/';

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
  mode: any = ['AUTO', 'COOL', 'DRY', 'FAN', 'HEAT']; // modes
  fan: any = ['AUTO', 'HIGH', 'MED', 'LOW', 'QUIET'];
  powerOn = false;

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
    this.airData = this.httpClient.get(`${this.API}/STATUS`);
    this.airData
    .subscribe(response => {
      console.log('my data: ', response);
      this.data = response.status; // previusly response.data
      this.isLoading = false;
      this.updatedData = this.data;
      this.initVars();
      this.initMode();
      this.initFanSpeed();
    });
  }

  initVars() {
    console.log('updatedData:' , this.updatedData);
    this.time = this.updatedData.time;
    this.temp = this.updatedData.temp;
    this.modeIndex = 0; // 
    this.mode = 0; // this.mode[this.modeIndex];
    this.updatedData.mode = 0;
    this.fanSpeed = 2; // this.updatedData.fanCtrl;
    this.updatedData.fanSpeed = 1;
    this.swing = this.updatedData.swing;
    this.airFlow = this.updatedData.airFlow;
    this.powerOn = this.updatedData.powerOn;
  }

  powerMode() {
    if (this.powerOn){
      this.powerOn = false;
    } else {
      this.powerOn = true;
    }
    this.updateStatus();
  }

  initMode(){
    let modeIndex;
    modeIndex = this.modeIndex;
    if (isNaN(modeIndex)){
      modeIndex = 0;
    }
    if (modeIndex > 2){
      modeIndex = 0;
    }
    this.setModeIcon(modeIndex);
  }

  changeMode(){
    let modeIndex;
    modeIndex = this.modeIndex;
    modeIndex++;
    if (isNaN(modeIndex)){
      modeIndex = 0;
    }
    if (modeIndex > 2){
      modeIndex = 0;
    }
    this.modeIndex = modeIndex;
    this.updatedData.mode = modeIndex;
    // this.mode = this.mode[this.modeIndex];
    console.log('mode value:' + modeIndex);
    this.setModeIcon(modeIndex);

    this.updateStatus();
  }

  setModeIcon(modeIndex){
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
  }

  initFanSpeed(){
    let fanActualSpeed;
    fanActualSpeed = this.fanSpeed;
    if (fanActualSpeed === 5){
      fanActualSpeed = 1;
    }
    console.log('fan speed: ' + fanActualSpeed);
    this.setFanSpeedIcon(fanActualSpeed);
  }

  changeFanSpeed(){
    let fanActualSpeed;
    fanActualSpeed = this.fanSpeed;
    fanActualSpeed++;
    if (fanActualSpeed === 5){
      fanActualSpeed = 1;
    }
    console.log('fan speed: ' + fanActualSpeed);

    this.updatedData.fanSpeed = fanActualSpeed;
    this.fanSpeed = fanActualSpeed;

    this.setFanSpeedIcon(fanActualSpeed);
    this.updateStatus();
  }

  setFanSpeedIcon(fanSpeed){
    switch (fanSpeed){
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
  }

  setSwing(){
    if (this.swing){
      this.swing = false;
    } else {
      this.swing = true;
    }
    this.updatedData.swing = this.swing;
    console.log('swing: ' + this.swing);
    this.updateStatus();
  }

  setAirFlow(){
    if (this.airFlow){
      this.airFlow = false;
    }else{
      this.airFlow = true;
    }
    this.updatedData.airflow = this.airFlow;
    console.log('status:', this.updatedData);
    console.log('air flow: ' + this.airFlow);
    this.updateStatus();
  }

  tempUp(){
    let newTemp;
    newTemp = this.updatedData.temp ;
    newTemp = this.temp++;
    this.updatedData.temp = newTemp;
    console.log('temp:' + newTemp);

    this.updateStatus();
  }

  tempDown() {
    let newTemp;
    newTemp = this.updatedData.temp ;
    newTemp = this.temp--;
    this.updatedData.temp = newTemp;
    console.log('temp:' + newTemp);

    this.updateStatus();
  }

  updateStatus() {

    //const headers = new Headers();
    var options = { "headers": 
      {
      //'Access-Control-Request-Method': 'POST', 
      //'Access-Control-Request-Headers': 'Content-Type',
      //'Content-Type' :'text/json',
      //'Accept': 'text/html'
      //'Charset': 'UTF-8'
      } 
    };

    const headers = new HttpHeaders();
    headers.set('Access-Control-Request-Method','POST');

    /*const postData = {
      time: this.updatedData.time,
      temp: this.updatedData.temp,
      masterCtrl: this.updatedData.mode,
      fanCtrl: this.updatedData.fanSpeed,
      powerOn: 'ON',
      swing: this.updatedData.swing ? true : false,
      air_direction: 1
    };*/
    
    //&powerOn=${this.powerOn ? 'ON' : 'OFF'}
    //const power_var = this.powerOn ? '&powerOn=ON' : '';

    const postData = `time=${this.updatedData.time}&temp=${this.updatedData.temp}&masterCtrl=${this.updatedData.mode}&fanCtrl=${this.updatedData.fanSpeed}&powerOn=${this.powerOn ? 'ON' : 'OFF'}&swing=${this.updatedData.swing ? 'ON' : 'OFF'}&air_direction=1"`;
    console.log(postData);

    this.httpClient.post(
      this.deviceUrl,
      postData,
      { 
        headers: headers,
        observe: 'body',
        responseType: 'text'
      }
    )
    .subscribe(data => {
      console.log('Updated data send!', data);
      //console.log(data['_body']);
    }, error => {
        console.log(error);
    });
  }

  ngOnDestroy() {
    if (this.airSubscription) {
      this.airSubscription.unsubscribe();
    }
  }

}
