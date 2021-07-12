import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/serives/auth.service';
import { CdService } from 'src/app/service/cd.service';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  customerName: string;
  customerEmail: any;
  customerSubject: string;
  customerMessage: string;
  message: string;

  constructor(public authservice: AuthService, public router: Router, public cdservice: CdService) { }

  ngOnInit(): void {


  }

  CreateRd() {
    let Rd = {};
    Rd['name'] = this.customerName;
    Rd['Email'] = this.customerEmail;
    Rd['Subject'] = this.customerSubject;
    Rd['Message'] = this.customerMessage;

    this.cdservice.customer(Rd).then(res1 => {

      this.customerName = "";
      this.customerEmail = undefined;
      this.customerSubject = "";
      this.customerMessage = "";
      console.log(res1);
      this.message = "Message Sucessfully Sent";
      this.router.navigate(['/contactus'])
    }).catch(error => {
      console.log(error);
    });
  }
}
