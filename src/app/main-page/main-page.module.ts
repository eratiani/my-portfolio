import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainViewComponent } from './main-view/main-view.component';
import { CoreModule } from '../core/core.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectComponent } from './components/project/project.component';
import { OtherComponent } from './components/other/other.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ButtonsComponent } from './components/projects/buttons/buttons.component';
@NgModule({
  declarations: [
    MainViewComponent,
    ProjectsComponent,
    SkillsComponent,
    ProjectComponent,
    OtherComponent,
    ProjectDetailsComponent,
    AboutMeComponent,
    ButtonsComponent,
  ],
  imports: [CommonModule, CoreModule, MatSidenavModule, RouterModule],
})
export class MainPageModule {}
