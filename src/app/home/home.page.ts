import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
  API = 'https://run.mocky.io/v3/dae97270-1414-498a-8d2b-f211a83a4953';

  // real url
  deviceUrl = 'http://85.57.77.218:350/';

  // enable / disable sending data
  sendDataEnabled = false;

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
  //masterCtrl
  masterCtrl: any = ['AUTO', 'COOL', 'DRY', 'FAN', 'HEAT']; // modes
  fanIndex = 0;
  fan: any = ['AUTO', 'HIGH', 'MED', 'LOW', 'QUIET'];
  powerOn = false;

  modeIndex: number;
  // hide div = boolean
  standardMode = true;
  heatMode = true;
  coldMode = true;

  swing = true;
  airFlow = true;
  airDirection = 1;
  isAirDown = true;
  fanCtrl: number;

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
    this.masterCtrl = 0; // this.masterCtrl.indexOf(this.updatedData.modeIndex);
    this.updatedData.masterCtrl = 0;
    this.fanCtrl = 2; // this.fan.indexOf(this.updatedData.fanCtrl);
    this.updatedData.fanCtrl = 1;
    this.swing = this.updatedData.swing;
    this.airFlow = this.updatedData.airFlow;
    // this.powerOn = this.updatedData.powerOn;
  }

  powerMode() {
    if (this.powerOn){
      this.powerOn = false;
    } else {
      this.powerOn = true;
    }
    this.updateDeviceStatus();
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
    this.updatedData.masterCtrl = modeIndex;
    // this.masterCtrl = this.masterCtrl[this.modeIndex];
    console.log('masterCtrl value:' + modeIndex);
    this.setModeIcon(modeIndex);

    this.updateDeviceStatus();
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
    fanActualSpeed = this.fanCtrl;
    if (fanActualSpeed === 5){
      fanActualSpeed = 1;
    }
    //console.log('fan control speed: ' + fanActualSpeed);
    this.setFanSpeedIcon(fanActualSpeed);
  }

  changeFanSpeed(){
    let fanActualSpeed;
    fanActualSpeed = this.fanCtrl;
    fanActualSpeed++;
    if (fanActualSpeed === 5){
      fanActualSpeed = 1;
    }
    console.log('fan speed: ' + fanActualSpeed);

    this.updatedData.fanCtrl = fanActualSpeed;
    this.fanCtrl = fanActualSpeed;

    this.setFanSpeedIcon(fanActualSpeed);
    this.updateDeviceStatus();
  }

  setFanSpeedIcon(fanCtrl){
    switch (fanCtrl){
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
    this.updateDeviceStatus();
  }

  setAirFlow(){
    let actualAirDirection = this.airDirection;

    if(this.isAirDown){
      actualAirDirection++;
    }else{
      actualAirDirection--;
    }
      

    if(actualAirDirection > 4){
      actualAirDirection = 3;
      this.isAirDown = false;
    }
    if(actualAirDirection < 1){
      actualAirDirection = 2;
      this.isAirDown = true;
    }
    this.airDirection = actualAirDirection;

    this.updatedData.airflow = this.airFlow;
    console.log('air flow: ' + this.airFlow);
    this.updateDeviceStatus();
  }

  tempUp(){
    let newTemp;
    newTemp = this.updatedData.temp ;
    newTemp = this.temp++;
    this.updatedData.temp = newTemp;
    console.log('temp:' + newTemp);

    this.updateDeviceStatus();
  }

  tempDown() {
    let newTemp;
    newTemp = this.updatedData.temp ;
    newTemp = this.temp--;
    this.updatedData.temp = newTemp;
    console.log('temp:' + newTemp);

    this.updateDeviceStatus();
  }

  composeFullBinaryString() {
    let maxPerByte = 8;
    let binaryString = '';
    let fullConfiguredString = '';
    let tempBinary = '';
    let powerOnBinary = '';
    let masterCtrlBinary = '';
    let fanCtrlBinary = '';

    // formato conversion binaria
    // POWER ON | NIVEL (Modo automático solamente)​ | ​TEMPERATURA​ | ​MASTER CONTROL ​| FAN CONTROL
    const initialBinaryString = '2|00101000|11000110|00000000|00001000|00001000|00111111|00010000|00001100';
    const finalBinaryString = '​0000|00000000|00001100|00101001|00101111|-2';

    tempBinary = this.toBinaryCode( this.temp.toString() );
    powerOnBinary = this.powerOn ? '0' : '1';
    masterCtrlBinary = this.toBinaryCode( this.masterCtrl );
    fanCtrlBinary = this.toBinaryCode( this.fanCtrl.toString() );

    fullConfiguredString = powerOnBinary + /*nivel*/ '000' + tempBinary + '1100|' + fanCtrlBinary;
    console.log('conf binary String: ' + fullConfiguredString );
    console.log('full binary String: ' + initialBinaryString + '|' + fullConfiguredString + '   ' + finalBinaryString);
  }

  reverseString(data: string) {
    let reversedString = '';
    reversedString  = data.split('').reverse().join('');
    return reversedString;
  }

  toBinaryCode(data: string){
    let formattedData = '';
    // ejemplo : temperatura to binary y luego se invierte, de derecha a izquierda
    formattedData = this.reverseString( (+data).toString(2) );
    if ( formattedData.length < 3 ){
      formattedData = '00' + formattedData;
    }
    return formattedData;
  }

  updateDeviceStatus() {

    // const headers = new Headers();
    let options = { 'headers':
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
      masterCtrl: this.updatedData.masterCtrl,
      fanCtrl: this.updatedData.fanCtrl,
      powerOn: 'ON',
      swing: this.updatedData.swing ? true : false,
      air_direction: 1
    };*/

    //&powerOn=${this.powerOn ? 'ON' : 'OFF'}
    //const power_var = this.powerOn ? '&powerOn=ON' : '';

    const postData = `time=${this.updatedData.time}&temp=${this.updatedData.temp}&masterCtrl=${this.updatedData.masterCtrl}&fanCtrl=${this.updatedData.fanCtrl}&powerOn=${this.powerOn ? 'ON' : 'OFF'}&swing=${this.updatedData.swing ? 'ON' : 'OFF'}&air_direction=1`;
    console.log(postData);

    this.composeFullBinaryString();

    if ( this.sendDataEnabled ){
      this.httpClient.post(
        this.deviceUrl,
        postData,
        {
          headers,
          observe: 'body',
          responseType: 'text'
        }
      )
      .subscribe(data => {
        console.log('Updated data send!', data);
      }, error => {
          console.log(error);
      });
    } else {
      console.log('SendData not enabled');
    }

  }

  ngOnDestroy() {
    if (this.airSubscription) {
      this.airSubscription.unsubscribe();
    }
  }

}
