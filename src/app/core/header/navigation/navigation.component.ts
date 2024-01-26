import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ResizeListenerService } from '../../services/resize-listener.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  widowWidth!: number;
  widowWidthSub!: Subscription;
  constructor(private windowWidthServ: ResizeListenerService) {}
  ngOnInit(): void {
    this.widowWidth = this.windowWidthServ.getScreenWidth();
    this.widowWidthSub = this.windowWidthServ.screenWidth.subscribe(
      (val) => (this.widowWidth = val)
    );
  }
  ngOnDestroy(): void {
    this.widowWidthSub.unsubscribe();
  }
}
