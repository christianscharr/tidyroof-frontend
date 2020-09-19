import {Component, Input, OnInit} from '@angular/core';
import {faBars} from "@fortawesome/pro-solid-svg-icons";

@Component({
  selector: 'oho-nav-overlay',
  templateUrl: './nav-overlay.component.html',
  styleUrls: ['./nav-overlay.component.scss']
})
export class NavOverlayComponent implements OnInit {

  @Input()
  active: string;

  ngOnInit() {
    // document.getElementById(this.active).classList.add('active');
  }

  openNav() {
    document.getElementById("myNav").style.display = "unset";
  }

  closeNav() {
    document.getElementById("myNav").style.display = "none";
  }

}
