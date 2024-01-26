import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { BurgerService } from 'src/app/core/services/burger.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent implements OnInit, OnDestroy {
  isBurgerClicked = false;
  burgerSub!: Subscription;
  constructor(private burgerServ: BurgerService) {}
  ngOnInit(): void {
    this.burgerSub = this.burgerServ.toggleBurgerSubject.subscribe(
      (val) => (this.isBurgerClicked = val)
    );
  }
  ngOnDestroy(): void {
    this.burgerSub.unsubscribe();
  }
}
