import { Component, OnDestroy, OnInit } from '@angular/core';
import { PortfolioItemService } from '../../shared/portfolio-item.service';
import { project } from '../projects/projects.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  currProject!: project;
  constructor(
    private project: PortfolioItemService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.currProject = project.projects.filter(
      (project) => String(project.id) === id
    )[0];
  }
  ngOnInit(): void {
    this.project.onMainPage = false;
  }
  ngOnDestroy(): void {
    this.project.onMainPage = true;
  }
}
