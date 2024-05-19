export class Ticket {
  // Create template of class constructor
  pnr: string | null;
  bookingDate: string | null;
  from: string | null | undefined;
  to: string | null | undefined;
  airline: any;
  departureDate: string | null | undefined;
  departureTime: string | null;
  travelClass: string | null | undefined;
  totalBasePrice: number | null;

  constructor(
    pnr: string | null,
    bookingDate: string | null,
    from: string | null | undefined,
    to: string | null | undefined,
    airline: any,
    departureDate: string | null | undefined,
    departureTime: string | null,
    travelClass: string | null | undefined,
    totalBasePrice: number | null
  ) {
    this.pnr = pnr;
    this.bookingDate = bookingDate;
    this.from = from;
    this.to = to;
    this.airline = airline;
    this.departureDate = departureDate;
    this.departureTime = departureTime;
    this.travelClass = travelClass;
    this.totalBasePrice = totalBasePrice;
  }
}
