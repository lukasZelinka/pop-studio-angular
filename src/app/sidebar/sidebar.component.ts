import { Component,Input,Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { mainLinks, icons, SocialIcon } from '../../assets/data/data'

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{
  mainLinks: MenuItem[] | undefined = mainLinks;
  icons: SocialIcon[] = icons;

  @Input() isSidebarOpen!: boolean; 
  @Output() closeSidebar = new EventEmitter
}
