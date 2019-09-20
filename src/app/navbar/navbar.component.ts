import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private elemRef: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    /**
     * If the mobile navigation bar is open, and the user clicks anywhere outside of it then close it.
     */
    if (document.getElementById('myTopnav').classList.contains('responsive') && !this.elemRef.nativeElement.contains(event.target)) {
      // this.closeNavBar();
      this.toggleNavBar();
    }
  }

  toggleNavBar() {
    const x = document.getElementById('myTopnav');
    x.className = x.className === 'topnav' ? x.className += ' responsive' : 'topnav';
  }
}
