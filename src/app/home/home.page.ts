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
      this.setTemp();
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

  getState() {
    return this.httpClient.get('');
  }

  ngOnDestroy() {
    if (this.airSubscription) {
      this.airSubscription.unsubscribe();
    }
  }

}
