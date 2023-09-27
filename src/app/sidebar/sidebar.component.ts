import { Component,Input,Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isSidebarOpen!: boolean; 
  @Output() closeSidebar = new EventEmitter
  
  

  ngOnChanges(changes: SimpleChanges) {
        if (changes['isSidebarOpen']) {
            console.log('Zmena vlastnosti myProperty:', changes['isSidebarOpen'].currentValue);
        }
    }
   
}
