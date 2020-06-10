import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  title="Customers";
  constructor() {}

  ngOnInit(): void {
  }

}
