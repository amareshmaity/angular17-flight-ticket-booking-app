import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';

// service
import { QueryFlightsService } from '../../_service/query-flights.service';

// model
import { FlightQuery } from '../../_models/flight-query';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-available-flights',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './available-flights.component.html',
  styleUrl: './available-flights.component.css',
  providers: [DatePipe],
})
export class AvailableFlightsComponent implements OnInit, OnDestroy {
  // initailize date and ticket token
  currentDate!: string | null;
  token!: string;

  constructor(
    private queryFlightsService: QueryFlightsService,
    private datePipe: DatePipe,
    private router: Router
  ) {}

  availableFlights!: FlightQuery[];
  // set isReceivedData as false for conditional rendering

  isError = false;
  isShow = false;
  availableFlightsArray!: any[];
  error = '';

  // subscription
  private subscription!: Subscription;

  // ngoninit method
  ngOnInit(): void {
    this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.token = this.queryFlightsService.generateToken();

    setTimeout(() => {
      this.availableFlights = this.queryFlightsService.getAvailableFlights();

      if (typeof this.availableFlights == 'string') {
        this.isError = true;
        this.error = this.availableFlights;
      } else {
        this.isError = false;
        this.availableFlightsArray = this.availableFlights;
      }
      console.log(this.isError);
      console.log('From available flights component');
      console.log(this.availableFlightsArray);

      // set is show true
      this.isShow = true;
    }, 300);

    console.log(this.isError);
  }

  //destroy ngOnInit
  ngOnDestroy(): void {}

  // go back to search flights again
  goBack() {
    this.router.navigate(['/flight-details']);
  }

  // go to booking flights page
  // bookTicket() {
  //   this.router.navigate(['/booking-flights']);
  // }
}
