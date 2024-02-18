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
  downloadCV(): void {
    const fileUrl = "../../../assets/Erekle's Resume.pdf";
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = "Erekle's Resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
