import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainViewComponent } from './main-view/main-view.component';
import { CoreModule } from '../core/core.module';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  declarations: [MainViewComponent],
  imports: [CommonModule, CoreModule, MatSidenavModule],
})
export class MainPageModule {}
