import { Component } from '@angular/core';
import { ScrollService } from 'src/app/core/shared/scroll.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
})
export class DesktopComponent {
  constructor(private scrollService: ScrollService) {}

  navigateToSection(sectionId: string): void {
    this.scrollService.scrollSection(sectionId);
  }
}
