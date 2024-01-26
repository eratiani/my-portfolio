import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { BurgerService } from 'src/app/core/services/burger.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss'],
})
export class BurgerComponent implements OnInit, OnDestroy {
  isBurgerTogled = false;
  burgerSub!: Subscription;
  constructor(private burgerServ: BurgerService) {}
  ngOnInit(): void {
    this.burgerSub = this.burgerServ.toggleBurgerSubject.subscribe(
      (val) => (this.isBurgerTogled = val)
    );
  }
  ngOnDestroy(): void {
    this.burgerSub.unsubscribe();
  }
  onBurgerClick() {
    this.burgerServ.toggleBurgerSubject.next(!this.isBurgerTogled);
  }
  onOverlayClick() {
    this.burgerServ.toggleBurgerSubject.next(!this.isBurgerTogled);
  }
}
