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
  Mode: any = ['Heat', 'Cold', 'Standard']; //modes
  fan: any = [];

  mode_index: number;
  //hide div = boolean
  standard_mode = true;
  heat_mode = true;
  cold_mode = true;

  swing = true;
  air_flow = true;


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
    let mode_i;
    mode_i = this.mode_index;
    console.log("mode value:" + mode_i);
    if(isNaN(mode_i)){
      mode_i = 0;
    }
    if(mode_i > 2){
      mode_i = 0;
    }
    console.log("mode value:" + mode_i);
    
    switch(mode_i){
      case 0: 
        this.standard_mode = false;
        this.heat_mode = true;
        this.cold_mode = true;
        break;
      case 1:
        this.standard_mode = true;
        this.heat_mode = false;
        this.cold_mode = true;
        break;
      case 2:
        this.standard_mode = true;
        this.heat_mode = true;
        this.cold_mode = false;
        break;
    }
    mode_i++;
    this.mode_index = mode_i;
  }

  setFan(){
    let mode_i;
    mode_i = this.mode_index;
    console.log("mode value:" + mode_i);
    if(isNaN(mode_i)){
      mode_i = 0;
    }
    if(mode_i > 2){
      mode_i = 0;
    }
    console.log("mode value:" + mode_i);
    
    switch(mode_i){
      case 0: 
        this.standard_mode = false;
        this.heat_mode = true;
        this.cold_mode = true;
        break;
      case 1:
        this.standard_mode = true;
        this.heat_mode = false;
        this.cold_mode = true;
        break;
      case 2:
        this.standard_mode = true;
        this.heat_mode = true;
        this.cold_mode = false;
        break;
    }
    mode_i++;
    this.mode_index = mode_i;
  }

  setSwing(){
    if(this.swing){
      this.swing = false;
    }else{
      this.swing = true;
    }
    console.log('swing: '+this.swing);
  }

  setAirFlow(){
    if(this.air_flow){
      this.air_flow = false;
    }else{
      this.air_flow = true;
    }
    console.log('air flow: '+this.air_flow);
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
