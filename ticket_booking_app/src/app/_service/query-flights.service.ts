import { Injectable } from '@angular/core';
import { Observable, catchError, of, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { FlightQuery } from '../_models/flight-query';

@Injectable({
  providedIn: 'root',
})
export class QueryFlightsService {
  constructor(private http: HttpClient) {}

  // creating a base url
  baseUrl = 'http://localhost:3000';

  // to store received value from server (observable)
  // receiveAvailableFlightData !: Observable<FlightQuery[]>;

  // Received available flights details after query
  receivedAvailableFlights!: Observable<FlightQuery[]>;
  availableFlights!: any;

  //Creating send method inside service - to send data (user) to backend and return observable
  sendData(queryFlight: any) {
    this.receivedAvailableFlights = this.http
      .post<any>(this.baseUrl + '/availableFlights', queryFlight)
      .pipe(
        shareReplay(1),
        catchError((error) => {
          console.error('Error : ', error);
          return of(error.error.message);
        })
      );
    // console.log(queryFlight);
    this.receivedAvailableFlights.subscribe((data) => {
      this.availableFlights = data;

      console.log('DAta Service', data);
      console.log('AvailableFly service', this.availableFlights);
    });

    // this.receivedAvailableFlights.subscribe();
  }

  // sendData(queryFlight: any): Observable<any> {
  //   this.receivedAvailableFlights = this.http.post<any>(
  //     this.baseUrl + '/availableFlights',
  //     queryFlight
  //   );
  //   console.log(this.receivedAvailableFlights);
  //   return this.receivedAvailableFlights;
  // }

  // send data to any component from service'

  getAvailableFlights() {
    console.log('From service -- GOo');
    console.log(this.availableFlights);
    return this.availableFlights;
  }

  // generate ticket number
  generateToken(): string {
    const allowedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const allowedNumbers = '1234567890';
    const tokenChLength = 2;
    const tokenNumLength = 5;
    let numToken = '';
    let chToken = '';
    for (let i = 0; i < tokenChLength; i++) {
      const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
      chToken += allowedCharacters[randomIndex];
    }

    for (let i = 0; i < tokenNumLength; i++) {
      const randomIndex = Math.floor(Math.random() * allowedNumbers.length);
      numToken += allowedNumbers[randomIndex];
    }
    return numToken;
  }
}
