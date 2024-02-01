import { Component, Input, OnInit } from '@angular/core';
import { project } from '../projects/projects.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() currProject!: project;
}
