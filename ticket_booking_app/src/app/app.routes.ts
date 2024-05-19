import { Routes } from '@angular/router';
import { AvailableFlightsComponent } from './_component/available-flights/available-flights.component';
import { HomeComponent } from './_component/home/home.component';
import { FlightDetailsComponent } from './_component/flight-details/flight-details.component';
import { BookingFlightComponent } from './_component/booking-flight/booking-flight.component';
import { ViewTicketComponent } from './_component/view-ticket/view-ticket.component';

export const routes: Routes = [
  { path: 'available-flights', component: AvailableFlightsComponent },
  { path: '', component: HomeComponent },
  { path: 'flight-details', component: FlightDetailsComponent },
  { path: 'booking-flights', component: BookingFlightComponent },
  { path: 'view-ticket', component: ViewTicketComponent },
];
