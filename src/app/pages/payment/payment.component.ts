import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public isRecurring: boolean = false;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
     if( this.route.snapshot.paramMap.get('type') == 'reoccurring')
     {
       this.isRecurring = true;
     }
     else
     {
       this.isRecurring = false;
     }
  }

}
