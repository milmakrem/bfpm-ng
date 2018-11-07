import {NgModule} from '@angular/core';
import { RentalListeItemComponent } from './rental-liste-item/rental-liste-item.component';
import { RentalListeComponent } from './rental-liste/rental-liste.component';
import { RentalComponent } from './rental.component';
import { HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { NgPipesModule } from 'ngx-pipes';
import { RentalService } from './shared/rental.service';
import {Routes , RouterModule } from '@angular/router';
import { RentalDetailsComponent } from './rental-details/rental-details.component';
import { UppercasePipe } from '../common/pipes/uppercase.pipe';

const routes : Routes =[
    {path:'rentals',
    component: RentalComponent,
    children:[ 
        {path:'', component:RentalListeComponent},
        {path:':rentalid',component:RentalDetailsComponent}

]},
   
  ]

@NgModule({
declarations : [
    RentalComponent,
    RentalListeComponent,
    RentalListeItemComponent,
    RentalDetailsComponent,
    UppercasePipe
],
imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NgPipesModule
],
providers:[RentalService]
})
export class RentalModule{

}