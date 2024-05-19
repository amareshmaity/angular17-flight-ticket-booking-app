// Create fligh details class
class FlightDetails {
  // make constructor
  constructor() {
    this.routePrices = [
      {
        route: "kolkata mumbai",
        availableFlights: [
          {
            time: "00:30",
            flightName: "IndiGo",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5500 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 5000 },
                { passerger: "child", price: 4400 },
              ],
              businessClass: [
                { passerger: "adults", price: 6500 },
                { passerger: "child", price: 6300 },
              ],
            },
          },
          {
            time: "3:40",
            flightName: "Air India",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5100 },
                { passerger: "child", price: 4300 },
              ],
              economyClass: [
                { passerger: "adults", price: 4800 },
                { passerger: "child", price: 4210 },
              ],
              businessClass: [
                { passerger: "adults", price: 6250 },
                { passerger: "child", price: 5700 },
              ],
            },
          },
          {
            time: "7:50",
            flightName: "IndiGo",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5500 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 5000 },
                { passerger: "child", price: 4400 },
              ],
              businessClass: [
                { passerger: "adults", price: 6500 },
                { passerger: "child", price: 6300 },
              ],
            },
          },
          {
            time: "13:10",
            flightName: "Air India",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5100 },
                { passerger: "child", price: 4300 },
              ],
              economyClass: [
                { passerger: "adults", price: 4800 },
                { passerger: "child", price: 4210 },
              ],
              businessClass: [
                { passerger: "adults", price: 6250 },
                { passerger: "child", price: 5700 },
              ],
            },
          },
          {
            time: "16:50",
            flightName: "IndiGo",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5500 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 5000 },
                { passerger: "child", price: 4400 },
              ],
              businessClass: [
                { passerger: "adults", price: 6500 },
                { passerger: "child", price: 6300 },
              ],
            },
          },
          {
            time: "22:20",
            flightName: "Alliance Air",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5500 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 5000 },
                { passerger: "child", price: 4400 },
              ],
              businessClass: [
                { passerger: "adults", price: 6500 },
                { passerger: "child", price: 6300 },
              ],
            },
          },
          {
            time: "23:30",
            flightName: "SpiceJet",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5500 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 5000 },
                { passerger: "child", price: 4400 },
              ],
              businessClass: [
                { passerger: "adults", price: 6500 },
                { passerger: "child", price: 6300 },
              ],
            },
          },
        ],
      },

      // kolkata to Delhi
      {
        route: "kolkata delhi",
        availableFlights: [
          {
            time: "01:30",
            flightName: "IndiGo",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5200 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 4850 },
                { passerger: "child", price: 4420 },
              ],
              businessClass: [
                { passerger: "adults", price: 6300 },
                { passerger: "child", price: 6150 },
              ],
            },
          },
          {
            time: "4:15",
            flightName: "Air India",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5000 },
                { passerger: "child", price: 4300 },
              ],
              economyClass: [
                { passerger: "adults", price: 4750 },
                { passerger: "child", price: 4100 },
              ],
              businessClass: [
                { passerger: "adults", price: 5950 },
                { passerger: "child", price: 5690 },
              ],
            },
          },
          {
            time: "8:20",
            flightName: "IndiGo",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5200 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 4850 },
                { passerger: "child", price: 4420 },
              ],
              businessClass: [
                { passerger: "adults", price: 6300 },
                { passerger: "child", price: 6150 },
              ],
            },
          },
          {
            time: "13:40",
            flightName: "Air India",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5000 },
                { passerger: "child", price: 4300 },
              ],
              economyClass: [
                { passerger: "adults", price: 4750 },
                { passerger: "child", price: 4100 },
              ],
              businessClass: [
                { passerger: "adults", price: 5950 },
                { passerger: "child", price: 5690 },
              ],
            },
          },
          {
            time: "17:15",
            flightName: "IndiGo",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5200 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 4850 },
                { passerger: "child", price: 4420 },
              ],
              businessClass: [
                { passerger: "adults", price: 6300 },
                { passerger: "child", price: 6150 },
              ],
            },
          },
          {
            time: "18:50",
            flightName: "Alliance Air",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5500 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 5000 },
                { passerger: "child", price: 4400 },
              ],
              businessClass: [
                { passerger: "adults", price: 6500 },
                { passerger: "child", price: 6300 },
              ],
            },
          },
          {
            time: "20:50",
            flightName: "SpiceJet",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5500 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 5000 },
                { passerger: "child", price: 4400 },
              ],
              businessClass: [
                { passerger: "adults", price: 6500 },
                { passerger: "child", price: 6300 },
              ],
            },
          },
        ],
      },

      // Delhi to Bangalore
      {
        route: "delhi bangalore",
        availableFlights: [
          {
            time: "01:30",
            flightName: "IndiGo",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5200 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 4850 },
                { passerger: "child", price: 4420 },
              ],
              businessClass: [
                { passerger: "adults", price: 6300 },
                { passerger: "child", price: 6150 },
              ],
            },
          },
          {
            time: "4:15",
            flightName: "Air India",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5000 },
                { passerger: "child", price: 4300 },
              ],
              economyClass: [
                { passerger: "adults", price: 4750 },
                { passerger: "child", price: 4100 },
              ],
              businessClass: [
                { passerger: "adults", price: 5950 },
                { passerger: "child", price: 5690 },
              ],
            },
          },
          {
            time: "8:20",
            flightName: "IndiGo",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5200 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 4850 },
                { passerger: "child", price: 4420 },
              ],
              businessClass: [
                { passerger: "adults", price: 6300 },
                { passerger: "child", price: 6150 },
              ],
            },
          },
          {
            time: "13:40",
            flightName: "Air India",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5000 },
                { passerger: "child", price: 4300 },
              ],
              economyClass: [
                { passerger: "adults", price: 4750 },
                { passerger: "child", price: 4100 },
              ],
              businessClass: [
                { passerger: "adults", price: 5950 },
                { passerger: "child", price: 5690 },
              ],
            },
          },
          {
            time: "17:15",
            flightName: "IndiGo",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5200 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 4850 },
                { passerger: "child", price: 4420 },
              ],
              businessClass: [
                { passerger: "adults", price: 6300 },
                { passerger: "child", price: 6150 },
              ],
            },
          },
          {
            time: "18:50",
            flightName: "Alliance Air",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5500 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 5000 },
                { passerger: "child", price: 4400 },
              ],
              businessClass: [
                { passerger: "adults", price: 6500 },
                { passerger: "child", price: 6300 },
              ],
            },
          },
          {
            time: "20:50",
            flightName: "SpiceJet",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5500 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 5000 },
                { passerger: "child", price: 4400 },
              ],
              businessClass: [
                { passerger: "adults", price: 6500 },
                { passerger: "child", price: 6300 },
              ],
            },
          },
        ],
      },

      // mumbai to guwahati

      {
        route: "mumbai guwahati",
        availableFlights: [
          {
            time: "00:30",
            flightName: "IndiGo",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5500 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 5000 },
                { passerger: "child", price: 4400 },
              ],
              businessClass: [
                { passerger: "adults", price: 6500 },
                { passerger: "child", price: 6300 },
              ],
            },
          },
          {
            time: "3:40",
            flightName: "Air India",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5100 },
                { passerger: "child", price: 4300 },
              ],
              economyClass: [
                { passerger: "adults", price: 4800 },
                { passerger: "child", price: 4210 },
              ],
              businessClass: [
                { passerger: "adults", price: 6250 },
                { passerger: "child", price: 5700 },
              ],
            },
          },
          {
            time: "7:50",
            flightName: "IndiGo",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5500 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 5000 },
                { passerger: "child", price: 4400 },
              ],
              businessClass: [
                { passerger: "adults", price: 6500 },
                { passerger: "child", price: 6300 },
              ],
            },
          },
          {
            time: "13:10",
            flightName: "Air India",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5100 },
                { passerger: "child", price: 4300 },
              ],
              economyClass: [
                { passerger: "adults", price: 4800 },
                { passerger: "child", price: 4210 },
              ],
              businessClass: [
                { passerger: "adults", price: 6250 },
                { passerger: "child", price: 5700 },
              ],
            },
          },
          {
            time: "16:50",
            flightName: "IndiGo",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5500 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 5000 },
                { passerger: "child", price: 4400 },
              ],
              businessClass: [
                { passerger: "adults", price: 6500 },
                { passerger: "child", price: 6300 },
              ],
            },
          },
          {
            time: "18:20",
            flightName: "Alliance Air",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5500 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 5000 },
                { passerger: "child", price: 4400 },
              ],
              businessClass: [
                { passerger: "adults", price: 6500 },
                { passerger: "child", price: 6300 },
              ],
            },
          },
          {
            time: "22:50",
            flightName: "SpiceJet",
            travelClass: {
              firstClass: [
                { passerger: "adults", price: 5500 },
                { passerger: "child", price: 4900 },
              ],
              economyClass: [
                { passerger: "adults", price: 5000 },
                { passerger: "child", price: 4400 },
              ],
              businessClass: [
                { passerger: "adults", price: 6500 },
                { passerger: "child", price: 6300 },
              ],
            },
          },
        ],
      },
    ];
  }

  // get array of objects of available flights
  availableFlightsArr = [];

  // Show available flights
  getAvailableFlights(source, destination, adults = 0, child = 0, travelClass) {
    if (this.availableFlightsArr.length != 0) {
      this.availableFlightsArr = [];
    }

    const route = `${source} ${destination}`;
    const foundRoute = this.routePrices.find((r) => r.route === route); // stored founded object for particular root

    if (foundRoute) {
      // for available flights after current time
      let currentDate = new Date(); // for now
      let currentHours = currentDate.getHours();
      let currentMinutes = currentDate.getMinutes();
      let currentTotalMinute = currentHours * 60 + currentMinutes;

      // get list of all available flights for a particular route
      const currentFlights = foundRoute.availableFlights.map((data) => {
        let time = data.time.split(":");
        let hour = parseInt(time[0]);
        let minute = parseInt(time[1]);
        let totalMinute = hour * 60 + minute;

        if (currentTotalMinute < totalMinute) {
          //console.log(data); // print avalibles flight data
          return data;
        }
      });

      // filter the currentFlights array by removing undefined array(filights that are not avalible)
      const filterCurrentFlights = currentFlights.filter(
        (element) => element !== undefined
      );

      //   console.log(filterCurrentFlights);
      // Get flight details according to trvel class

      if (filterCurrentFlights.length <= 0) {
        return "No Flight available for the specified route";
      } else {
        for (let flight of filterCurrentFlights) {
          //console.log(flight); //available flights details

          // filter travel class
          for (let tClass in flight.travelClass) {
            // console.log(tClass);

            if (travelClass === tClass) {
              let childBasePrice = 0; // initialize base price
              let adultsBasePrice = 0; // initialize base price

              if (adults > 0 && child <= 0) {
                adultsBasePrice = flight.travelClass[tClass][0].price;
              } else if (adults <= 0 && child >= 0) {
                childBasePrice = flight.travelClass[tClass][1].price;
              } else {
                adultsBasePrice = flight.travelClass[tClass][0].price;
                childBasePrice = flight.travelClass[tClass][1].price;
              }

              // store data in available flights arr
              this.availableFlightsArr.push({
                route: foundRoute.route,
                flightName: flight.flightName,
                time: flight.time,
                adultsBasePrice: adultsBasePrice,
                childBasePrice: childBasePrice,
              });
            }
          }
        }

        return this.availableFlightsArr;
      }
    } else {
      return "No Flight available for the specified route";
    }

    // function getFullName(item) {
    // return [item.firstname,item.lastname].join(" ");
    // }
    // for()
    // if(travelClass === ){
    //     return foundRoute.price
    // }
    // else{
    //     return "No Flight available for the specified route"
    // }
    // return foundRoute ? foundRoute.price : this.routePrices.find(r => r.route === 'default').price;
  }
}

module.exports = FlightDetails;
