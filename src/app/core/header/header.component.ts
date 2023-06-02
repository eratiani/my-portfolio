import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private renderer: Renderer2) {}
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
