import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-camera-capture',
  templateUrl: './camera-capture.component.html',
  styleUrls: ['./camera-capture.component.scss']
})
export class CameraCaptureComponent implements OnInit{
  public innerWidth: any;
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
}
