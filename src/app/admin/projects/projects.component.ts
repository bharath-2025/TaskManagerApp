import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{

  Projects !: Project[];
  newProject:Project = new Project();
  editProject:Project = new Project();
  editIndex:any = null;
  deleteProject:Project = new Project();
  deleteIndex:any = null;
  searchBy:string = "ProjectID"
  searchText:string = "";

  constructor(private projectsService : ProjectsService){

  }

  ngOnInit(){
    this.projectsService.getAllProjects().subscribe(
      (response:Project[])=>{
        this.Projects = response;
      }
    );
  }

  onSaveClick(){
    this.projectsService.addProject(this.newProject).subscribe(
      (response:Project)=>{
        var p:Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.Projects.push(p);
      },
      (error)=>{
        console.log(error);
      },
      ()=>{
        this.newProject.projectID = 0;
        this.newProject.projectName = null;
        this.newProject.dateOfStart = null;
        this.newProject.teamSize = 0;
      }
    );
  }

  onEditClick(event:any, index:number){
    this.editProject.projectID = this.Projects[index].projectID;
    this.editProject.projectName = this.Projects[index].projectName;
    this.editProject.dateOfStart = this.Projects[index].dateOfStart;
    this.editProject.teamSize = this.Projects[index].teamSize;

    this.editIndex = index;
  }

  onUpdateClick(){
    this.projectsService.updateProject(this.editProject).subscribe(
      (response:Project)=>{
        var p:Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;

        this.Projects[this.editIndex] = p;

        this.editProject.projectID = 0;
        this.editProject.projectName = null;
        this.editProject.dateOfStart = null;
        this.editProject.teamSize = 0;
      }
    );
  }

  onDeleteClick(event:any,index:number){
    this.deleteIndex = index;
    this.deleteProject.projectID = this.Projects[index].projectID;
    this.deleteProject.projectName = this.Projects[index].projectName;
    this.deleteProject.dateOfStart = this.Projects[index].dateOfStart;
    this.deleteProject.teamSize = this.Projects[index].teamSize;
  }

  onDeleteConfirm(){
    this.projectsService.deleteProject(this.deleteProject.projectID).subscribe(
      (response:string)=>{
        this.Projects.splice(this.deleteIndex,1);
        this.deleteProject.projectID = 0;
        this.deleteProject.projectName = null;
        this.deleteProject.dateOfStart = null;
        this.deleteProject.teamSize = 0;
      }
    );
  }

  onSearchClick(){
    this.projectsService.searchProjects(this.searchBy,this.searchText).subscribe(
      (response:Project[])=>{
        this.Projects = response;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
