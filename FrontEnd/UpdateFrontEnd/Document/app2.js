const numbers = [1,2,-1, 4, 53];


let users = [
    {
        img: "http://localhost/5000/images/house1.jpg",
        id: 1,
        data: {
            room: 1,
            type: "H",
            price: 2000
        }
        
    },
    {
        img: "http://localhost/5000/images/house2.jpg",
        id: 2,
        data: {
            room: 2,
            type: "A",
            price: 1500
        }
    },
    {
        img: "http://localhost/5000/images/house3.jpg",
        id: 3,
        data: {
            room: 3,
            type: "H",
            price: 1500
        }
    }
]





const filtered = users.filter(function(value){
    console.log(value.data.room);
    return (
        value.data.room > 1 &&
        value.data.price >= 1000 &&
        value.data.price <= 1800 &&
        value.data.type == "A"
        )
});


            // user.data.room == room &&
            // user.data.type == type &&
            // userPrice >= price - 500 && // Check if the price is greater than or equal to the minimum
            // userPrice <= price + 500 // Check if the price is less than or equal to the maximum


console.log(filtered);



