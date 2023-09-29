import { Component,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isSidebarOpen!: boolean; 
  @Output() closeSidebar = new EventEmitter
  
  


   
}
