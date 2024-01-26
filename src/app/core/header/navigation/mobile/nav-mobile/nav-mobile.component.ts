import { Component } from '@angular/core';

import { BurgerService } from 'src/app/core/services/burger.service';
import { ScrollService } from 'src/app/core/shared/scroll.service';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.scss'],
})
export class NavMobileComponent {
  constructor(
    private burgerServ: BurgerService,
    private scrollService: ScrollService
  ) {}
  toggleBurger() {
    this.burgerServ.toggleBurgerSubject.next(false);
  }

  navigateToSection(sectionId: string): void {
    this.scrollService.scrollSection(sectionId);
  }
}
