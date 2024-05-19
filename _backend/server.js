// install express
const express = require("express");
const cors = require("cors");
const bodyParse = require("body-parser");

// get flight data
const FlightDetails = require("./Models/flight_details");

const app = express();
const PORT = 3000;

// app.use(express.json());
app.use(bodyParse.json()); // to parse JSON request bodies
// The express.json() middleware is used to parses the incoming request object as a JSON object. The app.use() is the syntax to use any middleware.
app.use(cors()); //enables cors for all routs

// create object instances of FlightDetails
let flightDetails = new FlightDetails();

// Methode to get request and make response
// app.get("/", (req, res) => {
//   res.status(200); //
//   res.send("Welcome to root URL of Server");

//   console.log(
//     flightDetails.getAvailableFlights("kolkata", "mumbai", 2, 1, "economyClass")
//   );
//   // console.log(FlightDetails.getAvailableFlights(source, destination, adults=0, child=0, travelClass));
// });

app.post("/availableFlights", (req, res) => {
  const { source, destination, adultsNo, childNo, travelClass } = req.body;

  // res.send(`Welcome ${name, email}`);
  console.log("Server--------------");
  console.log(req.body);

  // const availableFlights = [];

  // if (availableFlights.length != 0) {
  //   availableFlights = [];
  // }

  // query for available flights using method
  const availableFlights = flightDetails.getAvailableFlights(
    source,
    destination,
    adultsNo,
    childNo,
    travelClass
  );
  console.log(availableFlights);

  // // Query for a particular products
  // if (products.length === 0) {
  //   res.status(404).json({ message: "No products available!" });
  // } else {
  //   const searchProduct = products.find((product) => {
  //     return product.name === name; // return object which first satisfied condition
  //   });
  // }

  if (typeof availableFlights === "string") {
    console.log(availableFlights);
    res.status(404).json({ message: availableFlights });
  } else {
    res.status(200).json(availableFlights);
  }
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and  App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
