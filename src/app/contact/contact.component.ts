import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  dividerLayout: 'horizontal' | 'vertical' = 'vertical';
  
  ngOnInit(): void {
    this.onResize(); 
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.dividerLayout = window.innerWidth <= 800 ? 'horizontal' : 'vertical';
  }
}
