import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from 'src/app/core/shared/scroll.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  readMore: boolean = false;
  private scrollSubscription!: Subscription;

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.scrollSubscription = this.scrollService.scrollSubject.subscribe(
      (section: string) => {
        if (section === 'about') {
          this.scrollToContact();
        }
      }
    );
  }

  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }

  scrollToContact() {
    const contactElement = document.getElementById('about');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  onReadMore() {
    this.readMore = !this.readMore;
  }
}
