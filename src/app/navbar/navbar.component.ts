import { Component, ElementRef, ViewChild,AfterViewChecked} from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewChecked {
    isSidebarOpen: boolean = false;

    @ViewChild('pToolbar', { static: true }) pToolbar!: any;

    constructor(private elementRef: ElementRef) { }


    toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
    }

     closeSidebar() {
        this.isSidebarOpen = false;
    }

    ngAfterViewChecked() {    
      this.navUnderlay()
    }

    navUnderlay() {
      const pToolbarHeight = this.pToolbar.el.nativeElement.getBoundingClientRect().height;
      this.elementRef.nativeElement.style.height = pToolbarHeight + 'px';
    }
}
