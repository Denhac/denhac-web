import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-resources',
  templateUrl: './member-resources.component.html',
  styleUrls: ['./member-resources.component.scss']
})
export class MemberResourcesComponent implements OnInit {

  constructor(private router:Router) {
 
   }

  ngOnInit() {
  }

  goToPayment(type)
  {
    this.router.navigate(['/payment/'+type]);
  }
}
