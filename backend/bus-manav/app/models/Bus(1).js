var mongoose = require ( 'mongoose' );
let Buses = new mongoose.Schema({
    busNumber: {
        type: Number,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    busType: {
        type: String,
        default : 'sleeper',
        required: true
    },
    
    startCity: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    departDate: {
        type: Date,
        required: true
    },
    departTime: {
        type: String,
        required: true
    },
    seatsRow: {
        type: Number,
        default : 10
    },
    seatsCol: {
        type: Number,
        default : 3
    },
    totalSeats:{
        type: Number,
    },
    availableSeats:{
        type: Number,
    },
    pricePerSeat: {
        type: Number,
        required : true
        
    },
    driver : {
           name  : String,
           phoneNumber : Number
    },
    ForEverySeat : {
        type : Array
    }

},
{
    collection: 'buses'
 }
)

module.exports = mongoose.model("bus", Buses);

