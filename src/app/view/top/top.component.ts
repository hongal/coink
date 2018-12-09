import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.sass']
})
export class TopComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  reason = '';

  constructor() {
  }

  ngOnInit() {
  }
  open() {
    this.sidenav.open();
    document.getElementById('dark-overlay').style.display = 'block';
  }

  close(){
    this.sidenav.close();
    document.getElementById('dark-overlay').style.display = 'none';
  }
}
