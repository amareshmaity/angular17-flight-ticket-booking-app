import { Component } from '@angular/core';
import { FlightDetailsComponent } from '../flight-details/flight-details.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FlightDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
