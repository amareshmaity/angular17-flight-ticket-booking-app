import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { SharedDataService } from '../../_service/shared-data.service';
import { CommonModule } from '@angular/common';

import jsPDF from 'jspdf';
//import * as jsPDF from 'jspdf'; // Import jspdf
import html2canvas from 'html2canvas'; // Import html2canvas
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-ticket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-ticket.component.html',
  styleUrl: './view-ticket.component.css',
})
export class ViewTicketComponent {
  constructor(
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}

  ticketDetails!: any;
  passengerNames!: any[];

  // calculate total price
  passengerServiceCharge = 230;
  surcharge = 1200;
  fuelInsurance = 510;
  ticketServiceCharge = 40;

  totalPrice = 0;

  // boolean
  isShow: boolean = false;

  viewTicket() {
    this.ticketDetails = this.sharedDataService.bookTicket();
    this.passengerNames = this.sharedDataService.passengers();

    console.log(' From view ticket page');
    console.log(this.ticketDetails);
    console.log(this.passengerNames);

    this.totalPrice =
      this.ticketDetails['totalBasePrice'] +
      this.passengerServiceCharge +
      this.surcharge +
      this.fuelInsurance +
      this.ticketServiceCharge;

    // show the form
    this.isShow = true;
  }

  // downloadPDF() {
  //   const elementToPrint: any = document.getElementById('ticket');

  //   html2canvas(elementToPrint, { scale: 2 }).then((canvas) => {
  //     const pdf = new jsPDF();

  //     pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);

  //     // pdf.setProperties({
  //     //   title: 'My Awesome pdf',
  //     //   subject: 'PDF from html with Angular',
  //     //   author: 'Amaresh maity',
  //     // });

  //     // pdf.setFontSize(12);
  //     // pdf.text('Adjdjljl', 14, 12);

  //     pdf.save('myticket.pdf');
  //   });
  // }

  downloadPDF() {
    let jsPdf = new jsPDF('p', 'px', 'a4');
    var htmlElement: any = document.getElementById('ticket');
    // you need to load html2canvas (and dompurify if you pass a string to html)
    const opt: any = {
      callback: function (jsPdf: { save: (arg0: string) => void }) {
        jsPdf.save('my-ticket.pdf');
        // to open the generated PDF in browser window
        // window.open(jsPdf.output('bloburl'));
      },
      margin: [15, 15, 15, 15],
      autoPaging: 'text',
      html2canvas: {
        allowTaint: true,
        dpi: 300,
        letterRendering: true,
        logging: false,
        scale: 0.3,
      },
    };

    jsPdf.html(htmlElement, opt);
  }

  goHome() {
    // go to home page again
    this.router.navigate(['/flight-details']);
  }
}
