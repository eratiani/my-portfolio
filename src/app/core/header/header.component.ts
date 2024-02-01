import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ResizeListenerService } from '../services/resize-listener.service';
import { PortfolioItemService } from 'src/app/main-page/shared/portfolio-item.service';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  widowPosY!: number;
  windowWidth!: number;
  windowPosYSub!: Subscription;
  windowWidthSub!: Subscription;
  isMyCoverLetterShown!: boolean;
  isScrollingUp!: boolean;

  private scrollSubscription!: Subscription;
  constructor(
    private scrollServ: ResizeListenerService,
    private portItem: PortfolioItemService,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.widowPosY = this.scrollServ.getScrollPosition();
    this.windowWidth = this.scrollServ.getScreenWidth();
    this.isMyCoverLetterShown = this.portItem.onMainPage;
    this.scrollSubscription = this.scrollService.scrollSubject.subscribe(
      (section: string) => {
        if (section === 'header') {
          this.scrollToContact();
        }
      }
    );
    this.windowPosYSub = this.scrollServ.scrollPosition.subscribe(
      (val) => (this.widowPosY = val.current)
    );

    this.windowPosYSub = this.scrollServ.scrollPosition.subscribe((val) => {
      this.widowPosY = val.current;
      this.isScrollingUp = val.isScrollingUp;
    });
  }
  ngOnDestroy(): void {
    this.windowPosYSub.unsubscribe();
    // this.windowWidthSub.unsubscribe();
    this.scrollSubscription.unsubscribe();
  }
  scrollToContact() {
    const contactElement = document.getElementById('header');

    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
