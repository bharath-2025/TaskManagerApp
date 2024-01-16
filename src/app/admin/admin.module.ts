import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { DashboardService } from '../dashboard.service';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [DashboardComponent,ProfileComponent,AboutComponent,ProjectsComponent],
  imports: [
    CommonModule,HttpClientModule,FormsModule
  ],
  exports: [
    DashboardComponent,ProfileComponent,AboutComponent,ProjectsComponent
  ],
  providers: [DashboardService]
})
export class AdminModule { }
