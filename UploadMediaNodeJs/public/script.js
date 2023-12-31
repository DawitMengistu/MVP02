const submitBtn = document.querySelector('.submit-btn');
let fileName = "";
const fileInput = document.querySelector(".fileInput")

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();

  let cityData = document.querySelector(".city").value;
  let typeData = document.querySelector(".type").value;
  let roomData = document.querySelector(".room").value;
  let price = document.querySelector(".price").value;


  console.log(price)

    if (fileInput.files.length > 0) {
        fileName = fileInput.files[0].name;
    }


    const data = [
        {
            img1: "http://localhost:5000/images/a1.jpg",
            img2: "http://localhost:5000/images/a2.jpg",
            img3: "http://localhost:5000/images/a3.jpg",
            data: {
                location: "Ethiopia",
                city: "Arba Minch",
                room: 2,
                type: "R",
                price: 900
            }
            
        }
    ]

    const form = document.getElementById('uploadForm'); // Get the form element
    const formData = new FormData(form);

    // fetch("http://localhost:5000/users/", {
    //   method: "POST", // HTTP method
    //   headers: {
    //     "Content-Type": "application/json" // Specify that we're sending JSON data
    //   },
    //   body: JSON.stringify(data) // Convert the data object to a JSON string
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.text(); // Parse the response body as JSON
    //   })
    //   .then((data) => {
    //     // Handle the response data here
    //     console.log("Response data:", data);
    //   })
    //   .catch((error) => {
    //     // Handle any errors that occurred during the fetch
    //     console.error("Fetch error:", error);
    //   });

    let url = "http://localhost:5000/users/upload/?";

    url += "price=" + price + "&city=" + cityData + "&type=" + typeData + "&room=" + roomData;
    
  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    fetch("http://localhost:3001/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: "",
            }).then(response => response.json())
                .then(data => {
                    window.location.replace(data);
                })
                .catch(error => console.error(error));
  })
  .catch(error => {
    console.error('Error uploading files:', error);
  });
      
      // Create the POST request

})

// function displayFileName() {
//     const fileInput = document.querySelector('.fileInput');
    
//     if (fileInput.files.length > 0) {
//         const fileName = fileInput.files[0].name;
//         console.log(fileName);
//     }
// }