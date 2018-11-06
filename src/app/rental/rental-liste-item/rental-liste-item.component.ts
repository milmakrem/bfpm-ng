import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-rental-liste-item',
  templateUrl: './rental-liste-item.component.html',
  styleUrls: ['./rental-liste-item.component.scss']
})
export class RentalListeItemComponent implements OnInit {
@Input() rental :any ;
  constructor() { }

  ngOnInit() {
  }

}
