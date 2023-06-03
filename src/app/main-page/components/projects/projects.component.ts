import { Component, HostListener } from '@angular/core';
import { PortfolioItemService } from '../../shared/portfolio-item.service';

export interface project {
  id: number;
  title: string;
  description: string;
  date: string;
  deploylink?: string;
  repoLink: string;
  tools: string;
  imgLink?: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projectIndex: number = 0;
  currProject: project[] = [];
  itemsToShow!: number;

  constructor(private projects: PortfolioItemService) {
    this.itemsToShow = this.checkScreenWidth();
    this.render(this.itemsToShow);
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
