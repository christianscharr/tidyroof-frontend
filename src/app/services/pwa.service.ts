import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  promptEvent: any;
  installed = false;

  constructor() { }

  public initPwaPrompt() {
    window.addEventListener('appinstalled', (evt) => {
      this.installed = true;
    });
    window.addEventListener('beforeinstallprompt', (event: any) => {
      event.preventDefault();
      this.promptEvent = event;
    });
  }

  public addToHomeScreen() {
    if (!this.promptEvent) {
      return;
    }

    this.promptEvent.prompt();
  }
}
