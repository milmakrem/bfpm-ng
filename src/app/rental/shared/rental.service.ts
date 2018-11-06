import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import { Rental } from "./rental.model";
@Injectable() 
export class RentalService{
    private rentals : Rental[] =[
        {
        id:'1',
        title:'Central Appartment',
        city:'New York',
        street:'time sqaure',
        category:'appartment',
        image:'http://via.placehoder.com/350x250',
        badroom:4,
        description:'very nice appartement',
        dailyrate:4,
        shared : false,
        createdat:'6/11/2018'
    
      },
      {
        id:'2',
        title:'Central ',
        city:'Los angeles',
        street:'time sqaure',
        category:'appartment',
        image:'http://via.placehoder.com/350x250',
        badroom:4,
        description:'very nice appartement',
        dailyrate:35,
        shared : false,
        createdat:'6/11/2018'
    
      },
      {
        id:'3',
        title:'Appartment',
        city:'oklahoma',
        street:'time sqaure',
        category:'appartment',
        image:'http://via.placehoder.com/350x250',
        badroom:4,
        description:'very nice appartement',
        dailyrate:16,
        shared : false,
        createdat:'6/11/2018'
    
      },
      {
        id:'4',
        title:'Central',
        city:'Chicago',
        street:'time sqaure',
        category:'appartment',
        image:'http://via.placehoder.com/350x250',
        badroom:4,
        description:'very nice appartement',
        dailyrate:8,
        shared : false,
        createdat:'6/11/2018'
    
      }
    
    ];
    public getrentalById(rentalId : string): Observable<Rental>{
        return  new Observable<Rental>((observer) => {
            setTimeout(() =>{
                const foundRental =this.rentals.find((rental)=>{
                    return rental.id == rentalId;
                });
                observer.next(foundRental);
            }, 500);
        });

    }
     public getrentals(): Observable<Rental[]>{
        return new Observable<Rental[]>((observer) =>{
            setTimeout(() =>{
                observer.next(this.rentals);
            }, 1000);
          
        });
       

     }
}