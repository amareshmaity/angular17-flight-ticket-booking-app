import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
  FormGroup,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Router, RouterLink, RouterOutlet } from '@angular/router';

// service
import { QueryFlightsService } from '../../_service/query-flights.service';
import { SharedDataService } from '../../_service/shared-data.service';

// Models
import { FlightQuery } from '../../_models/flight-query';
import { SearchFlight } from '../../_models/search-flight';

@Component({
  selector: 'app-flight-details',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterOutlet, CommonModule],
  templateUrl: './flight-details.component.html',
  styleUrl: './flight-details.component.css',
})
export class FlightDetailsComponent {
  // to formatting date
  today!: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private queryFlightsService: QueryFlightsService,
    private sharedDataService: SharedDataService
  ) {
    const todayDate = new Date();
    this.today = todayDate.toISOString().split('T')[0];
  }

  // formatting date method
  dateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      return { invalidDate: true };
    }
    return null;
  }

  // Received available flights details after query
  receivedAvailableFlights!: FlightQuery[];
  sendSearchFlightData: SearchFlight = {
    source: '',
    destination: '',
    date: '',
    adultsNo: '',
    childNo: '',
    travelClass: '',
  };

  // Initialize flghtQuery! object to send data to server for query
  queryFlight = {};

  // Initialize form group and form field for taking data and validate data
  queryFlightsForm = new FormGroup({
    source: new FormControl('', [Validators.required]),
    destination: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required, this.dateValidator]),
    adultsNo: new FormControl('', [Validators.required]),
    childNo: new FormControl('', [Validators.required]),
    travelClass: new FormControl('', [Validators.required]),
  });

  // to disble and enable button
  // isDisable = this.queryFlightsForm.invalid;
  // isDisable =
  //   this.queryFlightsForm.invalid ||
  //   (this.adultNoInput == 0 && this.childNoInput == 0);

  // set isReceivedData as false for conditional rendering
  isReceivedData = false;
  isError = false;
  error = '';

  //method for submit
  submit() {
    // Store values to queryProduct object after user select a product for query
    this.queryFlight = {
      source: this.queryFlightsForm.value.source,
      destination: this.queryFlightsForm.value.destination,
      adultsNo: this.queryFlightsForm.value.adultsNo,
      childNo: this.queryFlightsForm.value.childNo,
      travelClass: this.queryFlightsForm.value.travelClass,
    };

    // print data in console from client side
    console.table(this.queryFlightsForm.value);

    // Get observable : send and get data (object) from server
    this.queryFlightsService.sendData(this.queryFlight);

    // set isReceivedData variable true to show the received data from server
    this.isReceivedData = true;
    this.isError = false;

    // for add router link to navigate
    this.router.navigate(['/available-flights']);

    // Store values to queryProduct object after user select a product for query
    this.sendSearchFlightData = {
      source: this.queryFlightsForm.value.source,
      destination: this.queryFlightsForm.value.destination,
      date: this.queryFlightsForm.value.date,
      adultsNo: this.queryFlightsForm.value.adultsNo,
      childNo: this.queryFlightsForm.value.childNo,
      travelClass: this.queryFlightsForm.value.travelClass,
    };

    // to sent data to shared data service
    this.sharedDataService.receiveSearchFlightForm(this.sendSearchFlightData);
  }

  //getter is used to return something
  get f() {
    return this.queryFlightsForm.controls;
  }
}
