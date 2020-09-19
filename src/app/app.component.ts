import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private prevScrollpos = window.pageYOffset;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    const currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > currentScrollPos) {
      document.getElementById('nav').style.top = '0';
    } else {
      document.getElementById('nav').style.top = '-80px';
    }
    this.prevScrollpos = currentScrollPos;
  }
}
