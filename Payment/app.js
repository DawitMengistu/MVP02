const express = require("express");
const app = express();
const request = require("request");
const cors = require("cors");

app.use(express.static("public"));
app.use(cors());



app.post("/", function (req, res) {
    let price = req.query.price;
    console.log(price);

    console.log("Some one is here")
    let options = {
        'method': 'POST',
        'url': 'https://api.chapa.co/v1/transaction/initialize/',
        'headers': {
            'Authorization': 'Bearer CHASECK_TEST-mbSKm9sfd6jdQ53O0gdWACsUNcVRTl7v'
        },
        formData: {
            'amount': '22',
            'currency': 'ETB',
            'email': 'abcd@gmail.com',
            'first_name': 'Dawit',
            'last_name': 'Mengistu',
            'tx_ref': Date.now(),
            'callback_url': 'http://localhost:3000/home',
            "return_url": "http://127.0.0.1:5500/FrontEnd/UpdateFrontEnd/rent.html"
            //   'customization[title]': 'I love e-commerce',
            //   'customization[description]': 'It is time to pay'
        }
    };

    request(options, function (error, response) {
        if (error) throw new Error(error);
        const responseData = JSON.parse(response.body)
        console.log(responseData);
        res.json(`${responseData.data.checkout_url}`);
    });
});

app.listen(3001, function () {
    console.log("Sever running at http://localhost:3001")
});