const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const rentalSchema = new Schema({
    title :{type :String , required:true , max:[120, 'too long, max is 120 caracters']},
    city :{type : String , required :true, lowercase:true},
    street :{type : String , required :true, min:[4, 'too shoort, min is 4 caracters']},
    category :{type : String , required :true, lowercase:true},
    image :{type : String , required :true},
    baadroom : Number,
    shared : Boolean,
    description :{type : String , required :true},
    dailyrate : Number,
    createdat :{ type:Date , default : Date.now}

});
module.exports = mongoose.model('Retal', rentalSchema);