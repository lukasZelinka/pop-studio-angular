import { Component} from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
    isSidebarOpen: boolean = false;


    constructor() { }


    toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
    }

     closeSidebar() {
        this.isSidebarOpen = false;
    }

}
