import { Component, OnInit, Renderer2 } from '@angular/core';
import { PortfolioItemService } from 'src/app/main-page/shared/portfolio-item.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private portItem: PortfolioItemService
  ) {}
  isMyCoverLetterShown!: boolean;
  ngOnInit(): void {
    this.isMyCoverLetterShown = this.portItem.onMainPage;
  }
  smoothScrollTar(event: MouseEvent) {
    if (!event.target) return;
    const targetId = (event.target as HTMLElement).classList[0]; // Assuming classList[0] contains the target class
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      this.renderer.setProperty(targetElement, 'scrollTop', 0);
      this.renderer.setProperty(targetElement, 'scrollLeft', 0);
      this.renderer.setStyle(targetElement, 'scrollBehavior', 'smooth');
      targetElement.scrollIntoView();
    }
  }
}
