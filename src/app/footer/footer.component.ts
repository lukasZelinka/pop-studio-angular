import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerLoaded: boolean = false


  ngOnInit(): void {
    this.footerDealyloading()
  }

  footerDealyloading() {
     setTimeout(() => {
      this.footerLoaded = true;
    }, 300); 
  }
}

