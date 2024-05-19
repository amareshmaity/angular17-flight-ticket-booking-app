export class FlightQuery {
  // Create template of class constructor
  source: string;
  destination: string;
  adultsNo: number;
  childNo: number;
  travelClass: string;
  value: any;

  constructor(
    source: string,
    destination: string,
    adultsNo: number,
    childNo: number,
    travelClass: string
  ) {
    this.source = source;
    this.destination = destination;
    this.adultsNo = adultsNo;
    this.childNo = childNo;
    this.travelClass = travelClass;
  }
}
