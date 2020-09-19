import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ScreenComponent } from 'src/app/components/screen/screen.component';
import { DeviceControllerComponent } from 'src/app/components/device-controller/device-controller.component';



@NgModule({
  declarations: [ DeviceControllerComponent ,ScreenComponent] ,
  imports: [
    CommonModule, IonicModule
  ],
  exports : [ DeviceControllerComponent ,ScreenComponent ],
  entryComponents: [ DeviceControllerComponent ,ScreenComponent ]
})
export class SharedModule { }
