const Rental = require('./models/rentals');
class FakeDb{
    constructor(){
        this.rentals =[
            {
           
            title:"Bice new ocean",
            city:"San Francisco",
            street:"Main Street",
            category:"Condo",
            image:"https://adorable-home.com/wp-content/gallery/a-contemporary-awesome-house-in-austin/a-contemporary-awesome-house-in-austin-1.jpg",
            bedrooms:4,
            shared:true,
            description:"Very nice appartement in center of the city",
            dailyrate:34
        
          },
          {
            
            title:"Modern appartement in center",
            city:"New York",
            street:"time sqaure",
            category:"appartment",
            image:"https://adorable-home.com/wp-content/gallery/a-contemporary-awesome-house-in-austin/a-contemporary-awesome-house-in-austin-3.jpg",
            bedrooms:4,
            shared:false,
            description:"Very nice appartement in center of the city",
            dailyrate:35
        
          },
          {
            title:"Old house in nature",
            city:"Spisska Nova Ves",
            street:"Banicka 1",
            category:"House",
            image:"https://adorable-home.com/wp-content/gallery/a-contemporary-awesome-house-in-austin/a-contemporary-awesome-house-in-austin-4.jpg",
            bedrooms:3,
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