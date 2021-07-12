import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/serives/auth.service';



@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(public authservice: AuthService) { }

  ngOnInit(): void {
  }

}