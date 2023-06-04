import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { PortfolioItemService } from 'src/app/main-page/shared/portfolio-item.service';
import { ScrollService } from '../shared/scroll.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private scrollSubscription!: Subscription;
  constructor(
    private portItem: PortfolioItemService,
    private scrollService: ScrollService
  ) {}
  isMyCoverLetterShown!: boolean;
  ngOnInit(): void {
    this.isMyCoverLetterShown = this.portItem.onMainPage;
    this.scrollSubscription = this.scrollService
      .getScrollObservable()
      .subscribe((section: string) => {
        if (section === 'header') {
          this.scrollToContact();
        }
      });
  }
  ngOnDestroy(): void {
    this.scrollSubscription.unsubscribe();
  }
  scrollToContact() {
    const contactElement = document.getElementById('header');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
