import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-controller',
  templateUrl: './device-controller.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./device-controller.component.scss'],
})
export class DeviceControllerComponent {
  @Input() data: any;
  temp: number = 0;
  isLoading = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.isLoading = true;
    // parseInt(this.data.temp);
    this.temp = 20;
    this.isLoading = false;
   }

  tempUp(){
    let newTemp;
    newTemp = this.temp++;
    this.data.temp = newTemp;
    console.log('temp:' + this.temp);
    return newTemp;
  }

  tempDown() {
    let newTemp = 0;
    newTemp = this.temp--;
    console.log('temp:' + this.temp);
    return newTemp;
  }

}
