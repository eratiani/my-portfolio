import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResizeListenerService {
  public screenWidth: Subject<number> = new Subject<number>();
  public scrollPosition: Subject<{ current: number; isScrollingUp: boolean }> =
    new Subject<{ current: number; isScrollingUp: boolean }>();
  private previousScrollPosition!: number;
  constructor() {
    window.addEventListener('resize', this.onResize.bind(this));
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  private onResize() {
    this.screenWidth.next(window.innerWidth);
  }
  private onScroll() {
    const currentScrollPosition = window.scrollY;
    const isScrollingUp = currentScrollPosition < this.previousScrollPosition;

    this.scrollPosition.next({ current: currentScrollPosition, isScrollingUp });

    this.previousScrollPosition = currentScrollPosition;
  }

  getScreenWidth(): number {
    return window.innerWidth;
  }
  getScrollPosition(): number {
    return window.scrollY;
  }
}
