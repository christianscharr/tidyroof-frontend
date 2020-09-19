import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  allergens = new FormControl();

  allergenList: string[] = ['Haselnüsse', 'Sojabohnen', 'Milch | Laktose', 'Schwefeldioxid | Sulfite', 'Nüsse', 'Gluten', 'Eier'];

  constructor() { }

  ngOnInit(): void {
  }

}
