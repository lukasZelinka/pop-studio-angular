import { Component} from '@angular/core';
import { mainLinks, icons, SocialIcon } from 'src/assets/data/data';
import { MenuItem } from "primeng/api";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
    icons: SocialIcon[] = icons;
    mainLinks: MenuItem[] = mainLinks;
    isSidebarOpen: boolean = false;

    toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
    }

     closeSidebar() {
        this.isSidebarOpen = false;
    }

}
