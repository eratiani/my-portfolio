import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainViewComponent } from './main-view/main-view.component';
import { CoreModule } from '../core/core.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectComponent } from './components/project/project.component';
import { OtherComponent } from './components/other/other.component';
@NgModule({
  declarations: [MainViewComponent, ProjectsComponent, SkillsComponent, ProjectComponent, OtherComponent],
  imports: [CommonModule, CoreModule, MatSidenavModule],
})
export class MainPageModule {}
