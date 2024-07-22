import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-root',
  templateUrl: './customer-root.component.html',
  styleUrls: ['./customer-root.component.scss']
})
export class CustomerRootComponent {
  constructor(private router: Router) { }

  btnClick=  () => {
      this.router.navigateByUrl('/customer/customer_list');
  };

}
