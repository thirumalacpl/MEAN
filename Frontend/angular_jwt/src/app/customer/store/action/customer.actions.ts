// import { createActionGroup, emptyProps, props } from '@ngrx/store';

// export const CustomerActions = createActionGroup({
//   source: 'Customer',
//   events: {
//     'Load Customers': emptyProps(),
    
    
//   }
// });

import { createAction, props } from "@ngrx/store";
import { Customer } from "src/app/models/customer";

export const addCustomers = createAction(
  '[Customer] Load Customers',
  (customer:Customer)=>({customer})

);