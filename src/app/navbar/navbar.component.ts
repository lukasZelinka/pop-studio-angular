import { Component} from '@angular/core';
import { mainLinks, icons, SocialIcon } from 'src/assets/data/data';
import { MenuItem } from "primeng/api"; 
import { SidebarService } from '../services/sidebar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
    icons: SocialIcon[] = icons;
    mainLinks: MenuItem[] = mainLinks; 

  constructor(private sidebarService: SidebarService) {}

  get isSidebarOpen(): boolean {
    return this.sidebarService.isSidebarOpen;
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  closeSidebar() {
    this.sidebarService.closeSidebar();
  }
}
