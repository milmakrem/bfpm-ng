import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'app-rental-liste',
  templateUrl: './rental-liste.component.html',
  styleUrls: ['./rental-liste.component.scss']
})
export class RentalListeComponent implements OnInit {
  rentals: Rental[] = [];
  constructor( private rentalService: RentalService) { }

  ngOnInit() {
    const rentalObservable =this.rentalService.getrentals();
    rentalObservable.subscribe(
      (rentals :Rental[]) =>{
        this.rentals = rentals;

      },
      (error) =>{

      },
      ()=>{}
    );
  }

}
