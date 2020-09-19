import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChange, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent implements AfterViewInit{
  @ViewChild('temperature', { static: false }) temperature: ElementRef;
  @Input() data: any = [];
  temp: number;
  time: string;

  constructor(
    private renderer: Renderer2
  ) {
    // this.data.temp
    // parseInt(20,10)
    this.temp = this.data.temp;
    this.time = this.data.time;
  }

  ngAfterViewInit(): void {
    const TempEl = this.temperature.nativeElement;
  }

}
