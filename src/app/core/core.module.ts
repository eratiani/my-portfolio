import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationMainComponent } from './navigation-main/navigation-main.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavigationMainComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
