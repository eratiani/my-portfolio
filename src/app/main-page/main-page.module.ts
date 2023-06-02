import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainViewComponent } from './main-view/main-view.component';
import { CoreModule } from '../core/core.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
@NgModule({
  declarations: [MainViewComponent, ProjectsComponent, SkillsComponent],
  imports: [CommonModule, CoreModule, MatSidenavModule],
})
export class MainPageModule {}
