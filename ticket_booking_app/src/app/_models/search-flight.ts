export class SearchFlight {
  // Create template of class constructor
  source: string | null | undefined;
  destination: string | null | undefined;
  date: string | null | undefined;
  adultsNo: string | null | undefined;
  childNo: string | null | undefined;
  travelClass: string | null | undefined;

  constructor(
    source: string | null | undefined,
    destination: string | null | undefined,
    date: string | null | undefined,
    adultsNo: string | null | undefined,
    childNo: string | null | undefined,
    travelClass: string | null | undefined
  ) {
    this.source = source;
    this.destination = destination;
    this.date = date;
    this.adultsNo = adultsNo;
    this.childNo = childNo;
    this.travelClass = travelClass;
  }
}
