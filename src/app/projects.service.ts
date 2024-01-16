import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './models/project';

const API_BASE_URL = "https://localhost:7131/api/Projects";

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  constructor(private httpClient : HttpClient) { }

  getAllProjects() : Observable<Project[]>{
    return this.httpClient.get<Project[]>(`${API_BASE_URL}`,{responseType:"json"})
  }

  addProject(newProject:Project) : Observable<Project>{
    return this.httpClient.post<Project>(`${API_BASE_URL}`,newProject,{responseType:"json"});
  }

  updateProject(existingProject:Project) : Observable<Project>{
    return this.httpClient.put<Project>(`${API_BASE_URL}`,existingProject,{responseType:"json"});
  }

  deleteProject(projectID:number) : Observable<string>{
    return this.httpClient.delete<string>(`${API_BASE_URL}?ProjectID=`+projectID);
  }

  searchProjects(searchBy:string,searchText:string) :Observable<Project[]>{
    return this.httpClient.get<Project[]>(API_BASE_URL+"/search?searchby="+searchBy+"&searchtext="+searchText,{responseType:"json"});
  };


}
