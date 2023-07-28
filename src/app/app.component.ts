import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  width!: number;
  mobileView!: boolean;
  menu = false;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = screen.width;
    // console.log('width : ', this.width);
    this.mobileView = this.width < 679;
    // console.log('mobileView : ', this.mobileView);
    console.log(screen.width);
  }
  ngOnInit(): void {
    this.onResize();
  }
  onClickMenu = () => {
    this.menu = !this.menu;
  };
}
