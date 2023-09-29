import { Component,Input,Output, EventEmitter, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { socialIcons } from '../../assets/data/data'

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  implements OnInit{
  socialIcons: MenuItem[] | undefined = socialIcons;

  @Input() isSidebarOpen!: boolean; 
  @Output() closeSidebar = new EventEmitter

ngOnInit() {}   
}
