import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  allergens = new FormControl();

  allergenList: string[] = ['Haselnüsse', 'Sojabohnen', 'Milch | Laktose', 'Schwefeldioxid | Sulfite', 'Nüsse', 'Gluten', 'Eier'];
  blind = localStorage.getItem(environment.blindMode) === 'true';

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.blind);
    const allergensTemp = localStorage.getItem(environment.allergens);
    if (allergensTemp) {
      this.allergens.setValue(JSON.parse(allergensTemp));
    }
    this.onChange();
  }

  onChange() {
    this.allergens.valueChanges.subscribe(() => {
      localStorage.setItem(environment.allergens, JSON.stringify(this.allergens.value));
    });
  }

  onBlindChange(event) {
    localStorage.setItem(environment.blindMode, event.checked);
  }
}
