import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SellerComponent } from './seller/seller.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    {
        path:'**',component:PageNotFoundComponent
    }
];
