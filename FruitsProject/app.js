const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema= new mongoose.Schema({

    name: {
    type:String,
    required: true
    },     
    rating: {
        type: Number,
        min: 1,
        max:10
    },
    review: String
});

// const Fruit= mongoose.model("Fruit", fruitSchema);

// const fruit= new Fruit({
//   name: "Apple",
//   rating: 10,
//   review: "Great Fruit"

// });

// fruit.save();


const personSchema= new mongoose.Schema({

    name: String, 
    age: Number,
    sex: String, 
    favoriteFruit: fruitSchema
});


const Person= mongoose.model("Person", personSchema);

const pineapple= {
    name: "Pineapple",
    rating: 3,
    review: "Acidic Fruit"
}

const person= new Person ({
  name: "John",
  rating: 7,
  sex: "m",
  favoriteFruit: pineapple

});

person.save();



// const kiwi= new Fruit({
// name: "kiwi",
// rating: 10,
// review: "Awesome fruit"
// });

// const orange= new Fruit({
// name: "orange",
// rating: 6,
// review: "Bad Fruit"

// });

// const banana= new Fruit({
//     name: "banana",
//     rating: 2,
//     review: "Fruit"
// })

// Fruit.insertMany([kiwi, orange, banana], function(err){
// if (err){
//     console.log(err);
// }else{
//     console.log("Succesfully saved all the fruits to fruitsDB")
// }

// });

// Fruit.find(function(err, fruits){
//     if (err){
//         console.log(err);
//     }else{
//     mongoose.connection.close();

//     fruits.forEach(function(fruit){
//         console.log(fruit.name)
//     });
// }
// });

// Fruit.updateOne({
// _id: "5f139bcd3255c03770fc66d8"}, {name: "Peach"}, function (err){
// if (err){
//     console.log(err);
// }else{
//     console.log("Succesfully updated document.")
// }

// });

// Fruit.deleteOne({name: "Peach"}, function (err){
//     if (err){
//         console.log(err);
//     }else{
//         console.log("Sucessfully deleted record")
//     }
// })


// Person.deleteMany({name: "John"}, function (err){
//     if (err){
//         console.log(err);
//     }else{
//         console.log("Sucessfully deleted all the record")
//     }
// })


