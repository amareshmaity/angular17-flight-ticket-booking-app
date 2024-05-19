import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

// service
import { SharedDataService } from '../../_service/shared-data.service';
import { QueryFlightsService } from '../../_service/query-flights.service';

// models
import { SearchFlight } from '../../_models/search-flight';
import { BookTicketDetils } from '../../_models/book-ticket-detils';

// interface of dynamic form control
interface DynamicFormControl {
  name: string; // The name of the form control
  value: any; // The initial value of the control
  validator?: any; // Optional validator function
}

@Component({
  selector: 'app-booking-flight',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './booking-flight.component.html',
  styleUrl: './booking-flight.component.css',
})
export class BookingFlightComponent implements OnInit, OnDestroy {
  // flight booking details
  bookTicketDetais!: Params;
  sendBookTicketDetails: any = {
    airplane: '',
    date: '',
    flightTime: '',
    tolatBasePrice: 0,
  };

  // dynamic form control initialization
  dynamicControls: DynamicFormControl[] = [];

  constructor(
    private sharedDataService: SharedDataService,
    private queryFlightsService: QueryFlightsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.bookTicketDetais = params;
      console.log('from query params');
      console.log(params);
      console.log(this.bookTicketDetais);
    });
  }

  // Initialize variables for creating dynamic form
  childNo: string | null | undefined = '';
  adultsNo: string | null | undefined = '';
  childBasePrice = 0;
  adultBasePrice = 0;

  adultNoNum: number = 0;
  childNoNum: number = 0;

  // add style to template
  isAddStyle = true;

  //convert undefined to number
  fileterUndefinde(valueS: string | null | undefined, valueN: number) {
    if (valueS === undefined) {
      valueS = '0'; // Or any other default number you prefer
      valueN = parseInt(valueS);
      return valueN;
    } else {
      valueS = valueS as string;
      valueN = parseInt(valueS);
      return valueN;
    }
  }

  // search

  // ngoninit method
  ngOnInit(): void {
    setTimeout(() => {
      this.childNo =
        this.sharedDataService.getSearchFlightFormData()['childNo'];
      this.adultsNo =
        this.sharedDataService.getSearchFlightFormData()['adultsNo'];
      this.childBasePrice = this.bookTicketDetais['childBasePrice'];
      this.adultBasePrice = this.bookTicketDetais['adultsBasePrice'];

      // convert to number
      this.childNoNum = this.fileterUndefinde(this.childNo, this.childNoNum);
      this.adultNoNum = this.fileterUndefinde(this.adultsNo, this.adultNoNum);

      console.log(
        'shared data service : ',
        this.sharedDataService.getSearchFlightFormData()['childNo']
      );
      console.log(
        'shared data service adult: ',
        this.sharedDataService.getSearchFlightFormData()['adultsNo']
      );

      console.log('From booking-flight page');
      console.log('Child price : ', this.childBasePrice);
      console.log('Child No : ', this.childNo);

      console.log('child', this.childNo);
      console.log('adult', this.adultsNo);
      console.log('child', this.childNo);
      console.log('adult', this.adultNoNum);

      this.openPassengerDetailsForm();
    }, 200);
  }

  //destroy ngOnInit
  ngOnDestroy(): void {}

  // boolean data
  //showPassengerDetailsForm = false; // Initially hide the form
  i!: number;
  j!: number;
  adults: any[] = []; // Array to store passenger details
  childs: any[] = []; // Array to store passenger details
  passengers: any[] = []; // Array to store passenger details
  openPassengerDetailsForm() {
    // Generate input boxes for each passenger
    // let numberOfPassengers = this.adultNoNum + this.childNoNum;
    for (let i = 0; i < this.adultNoNum; i++) {
      this.adults.push({ name: '' }); // Add more properties as needed for each passenger
    }
    for (let j = 0; j < this.childNoNum; j++) {
      this.childs.push({ name: '' }); // Add more properties as needed for each passenger
    }

    //this.showPassengerDetailsForm = true; // Display the passenger details form
  }

  submitPassengerDetails() {
    // Handle submitted passenger details
    console.log('Submitted passenger details:', this.adults);
    console.log('Submitted Child details:', this.childs);
    // this.booking = new Booking(
    //   "sudha@gmail.com",
    //   this.flightDetails.price,
    //   {source:this.flightDetails.source,destination:this.flightDetails.destination,date:this.flightDetails.dateOfTravel},
    //   this.passengers
    // );

    // console.log(this.booking);

    // this.flightService.createBooking(this.booking).subscribe({
    //   next:(response:any)=>{alert(response.message);
    //     this.showGeneratePdfButton = true;
    //   },
    //   error:err=>console.log(err)
    // })
    // You can send this data to your backend or perform required actions

    // go to view-ticket page
    this.router.navigate(['/view-ticket']);

    // store all passangers name in one array
    if (this.adults.length && this.childs.length) {
      let i = 1;
      let j = 1;
      for (let x of this.adults) {
        this.passengers.push(`{Adult ${i} : ${x.name}}`);
        i++;
      }
      for (let x of this.childs) {
        this.passengers.push(`{Child ${j} : ${x.name}}`);
        j++;
      }
    } else if (this.adults.length == 0) {
      let j = 1;
      for (let x of this.childs) {
        this.passengers.push(`{Child ${j} : ${x.name}}`);
        j++;
      }
    } else {
      let i = 1;
      for (let x of this.adults) {
        this.passengers.push(`{Adult ${i} : ${x.name}}`);
        i++;
      }
    }

    // send data to shared service
    this.sharedDataService.receivePassengersNames(this.passengers);

    // calculate total price and send data to shared service as object of each individual flight when user click on a particular book ticket button
    this.sendBookTicketDetails['airplane'] = this.bookTicketDetais['airplane'];
    this.sendBookTicketDetails['date'] = this.bookTicketDetais['date'];
    this.sendBookTicketDetails['flightTime'] =
      this.bookTicketDetais['flightTime'];
    this.sendBookTicketDetails['totalBasePrice'] = this.calculatePrice();

    this.sharedDataService.receivedBookFlightData(this.sendBookTicketDetails);
  }

  // Calculate price
  calculatePrice() {
    return (
      this.childBasePrice * this.childNoNum +
      this.adultBasePrice * this.adultNoNum
    );
  }
}
