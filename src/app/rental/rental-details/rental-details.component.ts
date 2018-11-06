import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.scss']
})
export class RentalDetailsComponent implements OnInit {

rental :Rental;
  constructor( private route: ActivatedRoute,
                private rentalService:RentalService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.getRental(params['rentalid']);
      }
    );
  }
  getRental(rentalId :string){
    this.rentalService.getrentalById(rentalId).subscribe(
    (rental:Rental) =>{
      this.rental= rental;
    });
  }

 

}
