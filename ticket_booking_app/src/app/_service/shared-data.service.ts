import { Injectable } from '@angular/core';
import { SearchFlight } from '../_models/search-flight';
import { Ticket } from '../_models/ticket';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  constructor() {}

  searchFlightForm!: SearchFlight;

  // to get data from flight-details-template
  receiveSearchFlightForm(data: SearchFlight) {
    this.searchFlightForm = data;

    console.log('From searchflight shared service : ', this.searchFlightForm);
  }

  // get search flight form data to use in any component
  getSearchFlightFormData() {
    return this.searchFlightForm;
  }

  // To receive customer details data from ticket booking page
  passengerNames: any[] = [];

  receivePassengersNames(data: any[]) {
    this.passengerNames = data;
    console.log('this is form shared data service', this.passengerNames);
  }

  // received data of a particular flight (from ) booking flight page
  bookFlightData!: any;
  receivedBookFlightData(data: any) {
    this.bookFlightData = data;
    console.log('this is form shared data service', this.bookFlightData);
    console.log(
      'this is form shared data service',
      this.bookFlightData['airplane']
    );
  }

  // ----------------------------------------------------------------------------------------
  // Final ticket details which will be download
  // generate ticket number
  generatePNR(): string {
    const allowedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const allowedToken = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const tokenChLength = 2;
    const tokenLength = 8;
    let token = '';
    let chToken = '';
    for (let i = 0; i < tokenChLength; i++) {
      const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
      chToken += allowedCharacters[randomIndex];
    }

    for (let i = 0; i < tokenLength; i++) {
      const randomIndex = Math.floor(Math.random() * allowedToken.length);
      token += allowedToken[randomIndex];
    }
    return chToken + token;
  }

  // Generate Booking date and time

  bookingDate(): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
      timeZoneName: 'short',
    };

    const now = new Date();
    return now.toLocaleString('en-US', options);
  }

  ticketDetails!: Ticket;
  // final ticket booking method
  bookTicket() {
    // Create final object for ticket
    this.ticketDetails = {
      pnr: this.generatePNR(),
      bookingDate: this.bookingDate(),
      from: this.searchFlightForm['source'],
      to: this.searchFlightForm['destination'],
      airline: this.bookFlightData['airplane'],
      departureDate: this.searchFlightForm['date'],
      departureTime: this.bookFlightData['flightTime'],
      travelClass: this.searchFlightForm['travelClass'],
      totalBasePrice: this.getBasePrice(),
    };

    return this.ticketDetails;
  }

  // get name of passenger
  passengers() {
    return this.passengerNames;
  }

  // filter book flight delete 0
  getBasePrice() {
    for (let x in this.bookFlightData) {
      if (x == 'totalBasePrice' && this.bookFlightData['totalBasePrice']) {
        console.log(
          'total base price from shared data service',
          this.bookFlightData['totalBasePrice']
        );
        return this.bookFlightData['totalBasePrice'];
      }
    }
  }
}
// adultsNo: 2;
// childNo: 1;
// date: '2024-05-18';
// destination: 'delhi';
// source: 'kolkata';
// travelClass: 'businessClass';
// }
// adultsBasePrice: '6500';
// airplane: 'DH350275';
// childBasePrice: '6300';
// date: '2024-05-18';
// flightTime: '18:50';
