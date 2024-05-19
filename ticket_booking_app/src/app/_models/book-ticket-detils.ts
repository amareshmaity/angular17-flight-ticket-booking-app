export class BookTicketDetils {
  // Create template of class constructor
  airplane: string | null;
  date: string | null;
  flightTime: string | null;
  adultsBasePrice: number | null;
  childBasePrice: number | null;

  constructor(
    airplane: string | null,
    date: string | null,
    flightTime: string | null,
    adultsBasePrice: number | null,
    childBasePrice: number | null
  ) {
    //   airplane: string | null | undefined;
    //   date: string | null | undefined;
    //   flightTime: string | null | undefined;
    //   adultsBasePrice: number | null | undefined;
    //   childBasePrice: number | null | undefined;

    //   constructor(
    //     airplane: string | null | undefined,
    //     date: string | null | undefined,
    //     flightTime: string | null | undefined,
    //     adultsBasePrice: number | null | undefined,
    //     childBasePrice: number | null | undefined
    //   ) {
    this.airplane = airplane;
    this.date = date;
    this.flightTime = flightTime;
    this.adultsBasePrice = adultsBasePrice;
    this.childBasePrice = childBasePrice;
  }
}
