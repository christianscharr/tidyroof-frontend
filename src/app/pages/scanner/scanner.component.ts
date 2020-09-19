import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Barcode, ScanResult, ScanSettings} from 'scandit-sdk-angular';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {
  public settings = new ScanSettings({enabledSymbologies: [Barcode.Symbology.EAN8, Barcode.Symbology.EAN13]});

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onScan($event: ScanResult) {
    this.router.navigate(['/product', 'gtin', $event.barcodes[0].data]);
  }

  onError($event: Error) {
    console.log($event);
  }
}
