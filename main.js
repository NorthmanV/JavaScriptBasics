var number = 15
// alert("Number is " + number)

var colors = [31, "red", "green", "blue"]
colors.push("white")
// alert(colors[4])

var i = 0
while(i < 10) {
    // console.log(i)
    i++
}

for(var i = 0; i < 10; i++) {
    // console.log(i)
}

colors.forEach(function(value) {
    // console.log(value)
})

if (1 == 1 && number != 6) {
    // console.log("True")
} else {
    // console.log("False")
}

var fruit = "orange"
switch(fruit) {
    case "apple": console.log("It is apple"); break
    case "orange": console.log("It is orange"); break
    default: console.log("Unknown fruit"); break
}

// Object literal
var person = {
    firstName: "Peter",
    lastName: "Parker",
    age: 21,
    friends: ["Gwen", "Norman"],
    address: {
        city: "New York",
        street: "Main Avenue"
    },
    fullName: function(){
        return this.firstName + " " + this.lastName
    }
}
// console.log(person.firstName)
// console.log(person.friends[0])
// console.log(person.address)
// console.log(person.fullName())

// Object constructor
var bmw = new Object()
bmw.color = "black"
bmw.year = 1978
bmw.describe = function() {
    return "BMW color is " + this.color + " and year is " + this.year
}
// console.log(bmw.describe())

// Constructor pattern
function Car(mark, color, year) {
    this.mark = mark
    this.color = color
    this.year = year
    this.describe = function() {
        return "This is " + this.mark + ". It is " + this.color + " color and " + this.year + " year of realese"
    }
}
var audi = new Car("Audi", "blue", 2011)
// console.log(audi.describe())

var bands = [
    {
        name: "Metallica",
        genre: "Metal"
    }, {
        name: "Nickelback",
        genre: "Rock"
    }, {
        name: "Jackson 5",
        genre: "Pop"
    }
]
// console.log(bands[0])

// Events
