import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { TokenStorageServiceService } from '../Services/token-storage-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 opened : boolean = false;
 currentUser: any;
  constructor(public router:Router,
              private token: TokenStorageServiceService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();

  }
  

}
