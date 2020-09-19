import {Component, OnInit} from '@angular/core';
import {Barcode, ScanResult, ScanSettings} from 'scandit-sdk-angular';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {
  public settings = new ScanSettings({enabledSymbologies: [Barcode.Symbology.EAN8, Barcode.Symbology.EAN13]});

  constructor() {
  }

  ngOnInit(): void {
  }

  onScan($event: ScanResult) {
    console.log($event);
  }

  onError($event: Error) {
    console.log($event);
  }
}
