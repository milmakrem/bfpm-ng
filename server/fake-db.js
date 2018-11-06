const Rental = require('./models/rentals');
class FakeDb{
    constructor(){
        this.rentals =[
            {
           
            title:"Bice new ocean",
            city:"San Francisco",
            street:"Main Street",
            category:"Condo",
            image:"https://pixabay.com/en/architecture-house-3d-design-1477041/",
            badroom:4,
            shared:true,
            description:"Very nice appartement in center of the city",
            dailyrate:34
        
          },
          {
            
            title:"Modern appartement in center",
            city:"New York",
            street:"time sqaure",
            category:"appartment",
            image:"https://pixabay.com/en/house-cemetery-haunted-house-2187170/",
            badroom:4,
            shared:false,
            description:"Very nice appartement in center of the city",
            dailyrate:35
        
          },
          {
            title:"Old house in nature",
            city:"Spisska Nova Ves",
            street:"Banicka 1",
            category:"House",
            image:"https://pixabay.com/en/architecture-bridge-building-travel-3121009/",
            badroom:3,
            shared:true,
            description:"Very nice appartement in center of the city",
            dailyrate:16
        
          }
         
        ];
    
    }
    async cleanDb(){
        await Rental.remove({});
    }
    pushRentalsToDb(){
      this.rentals.forEach((rental) => {
          const newRental = new Rental(rental);
          newRental.save();
          
      });  
    }
    seedDb(){
        this.cleanDb();
        this.pushRentalsToDb();
    }
}
module.exports = FakeDb;