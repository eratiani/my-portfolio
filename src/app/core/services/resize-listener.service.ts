import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResizeListenerService {
  public screenWidth: Subject<number> = new Subject<number>();
  public scrollPosition: Subject<number> = new Subject<number>();

  constructor() {
    window.addEventListener('resize', this.onResize.bind(this));
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  private onResize() {
    this.screenWidth.next(window.innerWidth);
  }
  private onScroll() {
    this.scrollPosition.next(window.scrollY);
  }

  getScreenWidth(): number {
    return window.innerWidth;
  }
  getScrollPosition(): number {
    return window.scrollY;
  }
}
