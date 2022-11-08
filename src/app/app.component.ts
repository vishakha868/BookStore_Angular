import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navItems=[
    {navLinkName:"Home",routeLink:""},
    {navLinkName:"My Cart",routeLink:"cart"},
    {navLinkName:"My Orders",routeLink:"orders"},
    {navLinkName:"Wishlist",routeLink:"wishlist"},
    {navLinkName:"Login/Register",routeLink:"register"},

  ]
}
 