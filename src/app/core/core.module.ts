import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NavigationComponent } from './header/navigation/navigation.component';
import { DesktopComponent } from './header/navigation/desktop/desktop.component';
import { MobileComponent } from './header/navigation/mobile/mobile.component';
import { BurgerComponent } from './header/navigation/mobile/burger/burger.component';
import { NavMobileComponent } from './header/navigation/mobile/nav-mobile/nav-mobile.component';
import { LazyLoadingDirective } from './directives/lazy-loading.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    DesktopComponent,
    MobileComponent,
    BurgerComponent,
    NavMobileComponent,
    LazyLoadingDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, LazyLoadingDirective],
})
export class CoreModule {}
