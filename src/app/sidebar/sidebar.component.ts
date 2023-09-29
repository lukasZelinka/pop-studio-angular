import { Component,Input,Output, EventEmitter, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  implements OnInit{
  @Input() isSidebarOpen!: boolean; 
  @Output() closeSidebar = new EventEmitter
  
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'About',
                icon: 'pi pi-fw pi-eye',
                url: 'https://vimeo.com/popstudio'
            },
            {
                label: 'Videos',
                icon: 'pi pi-fw pi-video'
            },
             {
                label: 'Photos',
                icon: 'pi pi-fw pi-camera',
                url: 'https://vimeo.com/popstudio'
            },
            {
                label: 'Contact',
                icon: 'pi pi-fw pi-phone'
            }
        ];
    }
   
}
