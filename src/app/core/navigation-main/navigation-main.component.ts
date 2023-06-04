import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-navigation-main',
  templateUrl: './navigation-main.component.html',
  styleUrls: ['./navigation-main.component.css'],
})
export class NavigationMainComponent implements OnInit {
  constructor(private scrollService: ScrollService) {}
  nav!: Element;
  screenWidth!: number;
  ngOnInit(): void {
    this.nav = document.querySelector('.nav-custom') as Element;
    this.screenWidth = window.innerWidth;
    if (!this.nav) return;
    this.Render(this.nav, this.screenWidth);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    if (!this.nav) return;
    this.Render(this.nav, this.screenWidth);
  }
  Render(element: Element, screenWidth: number) {
    if (screenWidth <= 767) {
      element.classList.add('display-none');
      if (element.classList.contains('nav-toggle')) {
        element.classList.remove('nav-toggle');
      }
    } else {
      if (element.classList.contains('display-none')) {
        element.classList.remove('display-none');
      }
      if (element.classList.contains('nav-toggle')) {
        element.classList.remove('nav-toggle');
      }
    }
  }
  onToggleNav() {
    this.nav.classList.toggle('display-none');
    this.nav.classList.toggle('nav-toggle');
  }
  navigateToSection(sectionId: string): void {
    if (this.nav.classList.contains('nav-toggle')) {
      this.nav.classList.remove('nav-toggle');
    }
    if (this.screenWidth <= 767) {
      this.nav.classList.add('display-none');
    }
    this.scrollService.scrollSection(sectionId);
  }
}
