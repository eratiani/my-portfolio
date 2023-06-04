import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PortfolioItemService } from '../../shared/portfolio-item.service';
import { Subscription } from 'rxjs';
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
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projectIndex: number = 0;
  currProject: project[] = [];
  itemsToShow!: number;
  private scrollSubscription!: Subscription;
  constructor(
    private projects: PortfolioItemService,
    private scrollService: ScrollService
  ) {
    this.itemsToShow = this.checkScreenWidth();
    this.render(this.itemsToShow);
  }
  ngOnInit(): void {
    this.scrollSubscription = this.scrollService
      .getScrollObservable()
      .subscribe((section: string) => {
        if (section === 'experience') {
          this.scrollToContact();
        }
      });
  }
  ngOnDestroy(): void {
    this.scrollSubscription.unsubscribe();
  }
  scrollToContact() {
    const contactElement = document.getElementById('experience');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.itemsToShow = this.checkScreenWidth();
    this.render(this.itemsToShow);
  }

  moveRIght() {
    if (this.projects.projects.length < this.itemsToShow) return;
    this.projectIndex = (this.projectIndex + 1) % this.projects.projects.length;
    this.render(this.itemsToShow);
  }
  checkScreenWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 700) {
      return 1;
    } else {
      return 2;
    }
  }
  moveLeft() {
    if (this.projects.projects.length < this.itemsToShow) return;
    this.projectIndex =
      (this.projectIndex - 1 + this.projects.projects.length) %
      this.projects.projects.length;
    this.render(this.itemsToShow);
  }

  render(numOfItems: number) {
    const startIndex = this.projectIndex;
    const endIndex =
      (this.projectIndex + numOfItems) % this.projects.projects.length;
    if (startIndex < endIndex && this.projects.projects.length > numOfItems) {
      this.currProject = this.projects.projects.slice(startIndex, endIndex);
    } else if (this.projects.projects.length < numOfItems) {
      this.currProject = this.projects.projects.slice(0);
    } else {
      this.currProject = this.projects.projects
        .slice(startIndex)
        .concat(this.projects.projects.slice(0, endIndex));
    }
  }
}
