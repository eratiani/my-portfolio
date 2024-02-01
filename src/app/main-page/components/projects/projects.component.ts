import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PortfolioItemService } from '../../shared/portfolio-item.service';
import { Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { ResizeListenerService } from 'src/app/core/services/resize-listener.service';
import { ScrollService } from 'src/app/core/shared/scroll.service';

export interface project {
  id: number;
  title: string;
  description: string;
  date: string;
  deploylink?: string;
  repoLink: string;
  tools: string;
  imgLink?: string;
  sharelink?: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [style({ opacity: 1 }), style({ opacity: 0 })]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  sliders!: project[];
  tempSlider: project[] = [];
  pageSize!: number;
  windowWidthSub!: Subscription;
  private activeIndex = 0;
  private intervalId!: ReturnType<typeof setInterval>;
  private startX = 0;
  private slideCount = 0;
  private scrollSubscription!: Subscription;

  constructor(
    private sliderServ: PortfolioItemService,
    private resizeServ: ResizeListenerService,
    private scrollService: ScrollService
  ) {}
  ngOnInit(): void {
    this.sliders = this.sliderServ.getSliderItems();
    this.tempSlider = this.sliders;
    this.pageSize = this.resizeServ.getScreenWidth();
    this.scrollSubscription = this.scrollService.scrollSubject.subscribe(
      (section: string) => {
        if (section === 'experience') {
          this.scrollToContact();
        }
      }
    );
    this.windowWidthSub = this.resizeServ.screenWidth.subscribe(
      (val) => (this.pageSize = val)
    );
    this.startInterval();
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    this.scrollSubscription.unsubscribe();
    this.windowWidthSub.unsubscribe();
  }
  get activeState(): string {
    return this.activeIndex.toString();
  }
  scrollToContact() {
    const contactElement = document.getElementById('experience');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  handleButtonClick(event: boolean) {
    if (event) {
      this.nextSlide();
    } else {
      this.prevSlide();
    }
    this.restartInterval();
  }
  nextSlide() {
    const slidesPerSet = 3;
    this.activeIndex =
      (this.activeIndex + 1) % Math.ceil(this.tempSlider.length / slidesPerSet);
    const startIdx = this.activeIndex * slidesPerSet;
    this.sliders = this.tempSlider.slice(startIdx, startIdx + slidesPerSet);
  }

  prevSlide() {
    const slidesPerSet = 3;
    this.activeIndex =
      (this.activeIndex -
        1 +
        Math.ceil(this.tempSlider.length / slidesPerSet)) %
      Math.ceil(this.tempSlider.length / slidesPerSet);
    const startIdx = this.activeIndex * slidesPerSet;
    this.sliders = this.tempSlider.slice(startIdx, startIdx + slidesPerSet);
  }

  onMouseDown(event: TouchEvent) {
    this.slideCount = 1;
    this.startX = event.touches[0].clientX;
  }

  onMouseMove(event: TouchEvent) {
    if (this.startX === 0 || this.slideCount !== 1) return;
    this.slideCount += 1;
    const currTouchX = event.touches[0].clientX;
    const deltaX = currTouchX - this.startX;
    if (deltaX >= 1) {
      this.nextSlide();
      this.restartInterval();
    } else if (deltaX <= -1) {
      this.prevSlide();
      this.restartInterval();
    }
  }

  onMouseUp() {
    this.slideCount = 0;
    this.startX = 0;
  }

  private startInterval() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  private restartInterval() {
    this.clearInterval();
    this.startInterval();
  }

  private clearInterval() {
    clearInterval(this.intervalId);
  }
}
