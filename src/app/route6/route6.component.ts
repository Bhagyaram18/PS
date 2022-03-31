import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.scss'],
})
export class Route6Component implements OnInit {
  divArray = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
  ];
  constructor() {}

  ngOnInit(): void {}
  lastScrollTop = 0;
  @HostListener('window:scroll') onScroll(e: Event): void {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.lastScrollTop) {
      setInterval(() => {
        this.addDivs(e);
      }, 500);
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }
  addDivs(e: any) {
    this.divArray.push({ id: this.divArray.length + 1 });
  }

  displayDivNumber(e: any) {
    alert("Button '" + e.target.value + "' is clicked");
  }
}
