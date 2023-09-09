
// const slider = document.querySelector(".input");


// const value  =  document.querySelector(".value");

// value.textContent =slider.value;
// slider.oninput=function(){
//     value.textContent= this.value;
// }


let typeArr = ["H", "A", "R", "C"];

const btn = document.querySelector(".btn");

const serach = document.querySelector(".filter-btn");




// const apartment = document.querySelector(".apart");
// const condominium = document.querySelector(".condo");
// const villa = document.querySelector(".villa");
// const House = document.querySelector(".house");


let typeBtn = document.querySelectorAll(".type-btn");
let roomBtn = document.querySelectorAll(".room-btn");

let houseType = "H";
let room = 0;


let rangeInput = document.querySelector(".price-range");
let valueElement = document.querySelector(".price-value");
let price = 1;

rangeInput.addEventListener("input", function() {
  valueElement.innerHTML = "$" + rangeInput.value;
  price = rangeInput.value;
});


for (let i = 0; i < typeBtn.length; i++) {
    let singleType = typeBtn[i];

    singleType.addEventListener("click", ()=>{
        for (let i = 0; i < typeBtn.length; i++) {
            let removeBtn = typeBtn[i];
            if(removeBtn.classList.contains("focused"))
            removeBtn.classList.remove("focused");
        }

        singleType.classList.toggle("focused");
        houseType = typeArr[i];
        getData(room,houseType, price)

    })

}

for (let i = 0; i < roomBtn.length; i++) {
    let singleType = roomBtn[i];
    singleType.addEventListener("click", ()=>{
        console.log("Here")
        for (let i = 0; i < roomBtn.length; i++) {
            let removeBtn = roomBtn[i];
            if(removeBtn.classList.contains("focused"))
            removeBtn.classList.remove("focused");
        }

        singleType.classList.toggle("focused");
        room = i+1;
        console.log(room, houseType, price)
        getData(room,houseType, price)
    })

}



function getData(room, type, price, location) {


    let link = "http://localhost:5000/users/search/"
    link += room + "?"+"type" + "=" + type +  "&"+ "price" + "=" + price

    console.log(link) 
    fetch(link)
    .then(res => res.json())
    .then(data =>{
        const resultContainer =  document.querySelector(".results");
           
        while (resultContainer.firstChild) {
         resultContainer.removeChild(resultContainer.lastChild);
         } 
         
        for (let i = 0; i < data.length; i++) {

            var newElement = document.createElement('div');
            var container = document.createElement('div');
            let imageElementOne = document.createElement('div');


        
            newElement.classList.add("results-container");
            let p1El = document.createElement('p');
            let p2El = document.createElement('p');
            let p3El = document.createElement('p');
            // let imgEL = document.createElement('img');
            let spanElement = document.createElement('span');
        
            // console.log(spanElement)
        
            let locationData = "";
        
            locationData += data[i].data.city + "," + data[i].data.location;
        
            p1El.innerText = locationData;
            p2El.innerText = "Property type"
            let pType = "";
        
            if (data[i].data.type == "C") {
                pType += " Condominum";
            } else if (data[i].data.type == "A") {
                pType += " Apartment";
            }
            else if (data[i].data.type == "H") {
                pType += " House";
            }
            else if (data[i].data.type == "R") {
                pType += " Realstate";
            }
        
            spanElement.innerText = pType;
            spanElement.classList.add("p-type-gray");
        
            p2El.appendChild(spanElement);
        
        
            p3El.innerText = data[i].data.price;
            imgEL.src = data[i].img1;
            console.log(data[i], "<------------------")
        
        
            container.classList.add('results-container');
            imageElementOne.classList.add('img-container');
            p1El.classList.add('location-city');
            p2El.classList.add('p-type');
            p3El.classList.add('price');
        
        
        
        
        
            imageElementOne.append(carouselEle());
            newElement.appendChild(imageElementOne);
            container.appendChild(imageElementOne);
            newElement.appendChild(container);
        
        
        
            newElement.appendChild(p1El);
            newElement.appendChild(p2El);
            newElement.appendChild(p3El);

           resultContainer.appendChild(newElement);
        
        }
    } )
    
}






fetch("http://localhost:5000/users")
.then(res => res.json())
.then(data =>{
    const resultContainer =  document.querySelector(".results");
       
    while (resultContainer.firstChild) {
     resultContainer.removeChild(resultContainer.lastChild);
     } 
     
    for (let i = 0; i < data.length; i++) {

        var newElement = document.createElement('div');
        var container = document.createElement('div');
        let imageElementOne = document.createElement('div');


    
        newElement.classList.add("results-container");
        let p1El = document.createElement('p');
        let p2El = document.createElement('p');
        let p3El = document.createElement('p');
        // let imgEL = document.createElement('img');
        let spanElement = document.createElement('span');
    
        // console.log(spanElement)
    
        let locationData = "";
    
        locationData += data[i].data.city + "," + data[i].data.location;
    
        p1El.innerText = locationData;
        p2El.innerText = "Property type"
        let pType = "";
    
        if (data[i].data.type == "C") {
            pType += " Condominum";
        } else if (data[i].data.type == "A") {
            pType += " Apartment";
        }
        else if (data[i].data.type == "H") {
            pType += " House";
        }
        else if (data[i].data.type == "R") {
            pType += " Realstate";
        }
    
        spanElement.innerText = pType;
        spanElement.classList.add("p-type-gray");
    
        p2El.appendChild(spanElement);
    
    
        p3El.innerText = data[i].data.price;
        // imgEL.src = data[i].img1;
        // console.log(data[i], "<------------------")
    
    
        container.classList.add('results-container');
        imageElementOne.classList.add('img-container');
        p1El.classList.add('location-city');
        p2El.classList.add('p-type');
        p3El.classList.add('price');
    
    
    
    
    
        imageElementOne.append(carouselEle(data[i], i));
        newElement.appendChild(imageElementOne);
        container.appendChild(imageElementOne);
        newElement.appendChild(container);
    
    
    
        newElement.appendChild(p1El);
        newElement.appendChild(p2El);
        newElement.appendChild(p3El);

       resultContainer.appendChild(newElement);
    
    }
} )



 function carouselEle( data,y) {
     // Create the main carousel container
     const carouselContainer = document.createElement('div');
     carouselContainer.id = 'carouselExample';
     carouselContainer.classList.add("button" + y)
     carouselContainer.classList.add('carousel', 'slide');
 
     // Create the carousel inner container
     const carouselInner = document.createElement('div');
     carouselInner.classList.add('carousel-inner');
 
     // Create carousel items
     for (let i = 1; i <= 3; i++) {
       const carouselItem = document.createElement('div');
       carouselItem.classList.add('carousel-item');
       if (i === 1) {
         carouselItem.classList.add('active');
       }
 
       const img = document.createElement('img');
       if (i == 1)  img.src = data.img1;
       else if (i == 2)  img.src = data.img2;
       else if (i == 3)  img.src = data.img3;
       
       img.classList.add('d-block',  "card-img");
       img.alt = '...';
       carouselItem.appendChild(img);
       carouselInner.appendChild(carouselItem);
     }
 
     // Create previous button
     const prevButton = document.createElement('button');
     prevButton.classList.add('carousel-control-prev');
     prevButton.type = 'button';
     prevButton.setAttribute('data-bs-target', ".button" + y);
     prevButton.setAttribute('data-bs-slide', 'prev');
 
     const prevIcon = document.createElement('span');
     prevIcon.classList.add('carousel-control-prev-icon');
     prevIcon.setAttribute('aria-hidden', 'true');
 
     const prevText = document.createElement('span');
     prevText.classList.add('visually-hidden');
     prevText.textContent = 'Previous';
 
     prevButton.appendChild(prevIcon);
     prevButton.appendChild(prevText);
 
     // Create next button
     const nextButton = document.createElement('button');
     nextButton.classList.add('carousel-control-next');
     nextButton.type = 'button';
     nextButton.setAttribute('data-bs-target', ".button" + y);
     nextButton.setAttribute('data-bs-slide', 'next');
 
     const nextIcon = document.createElement('span');
     nextIcon.classList.add('carousel-control-next-icon');
     nextIcon.setAttribute('aria-hidden', 'true');
 
     const nextText = document.createElement('span');
     nextText.classList.add('visually-hidden');
     nextText.textContent = 'Next';
 
     nextButton.appendChild(nextIcon);
     nextButton.appendChild(nextText);
 
     // Append elements to the main container
     carouselContainer.appendChild(carouselInner);
     carouselContainer.appendChild(prevButton);
     carouselContainer.appendChild(nextButton);

     return carouselContainer;
 }



 