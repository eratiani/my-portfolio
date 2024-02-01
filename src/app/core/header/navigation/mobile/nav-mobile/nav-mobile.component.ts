import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    private scrollService: ScrollService,
    private router: Router
  ) {}
  toggleBurger() {
    this.burgerServ.toggleBurgerSubject.next(false);
  }

  navigateToSection(sectionId: string): void {
    this.router.navigate(['/']);

    this.scrollService.scrollSection(sectionId);
  }
}
