import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SellerComponent } from './seller/seller.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {
        path:'login',component:LoginComponent
    },
    {
        path:'seller',component:SellerComponent
    },
    {
        path:'cart',component:CartComponent
    },
];
