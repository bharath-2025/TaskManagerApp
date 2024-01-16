import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements  OnInit{

  Designation !: string;
  Username !: string;
  NoOfTeamMembers !: number;
  TotalCostOfProjects !: number;
  PendingTasks !: number;
  UpcomingProjects !: number;
  ProjectCost !: number;

  CurrentExpenditure !: number;
  AvailableFunds !: number;

  Clients !: string[];
  Projects !: string[];
  TeamMembersSummary !: any[]
  TeamMembers !: any[]

  constructor(private dashboardService : DashboardService){

  }

  //Used to Initialize the properties of the component
  ngOnInit(){
    
    this.Designation = "Team Leader";
    this.Username = "Bharath";
    this.NoOfTeamMembers = 25;
    this.TotalCostOfProjects = 250;
    this.PendingTasks = 10;
    this.UpcomingProjects = 1;
    this.ProjectCost = 2123324;
    this.CurrentExpenditure = 398533;
    this.AvailableFunds = 353535;

    //Initializing the arrays
    this.Clients = [
      "ABC Infotech", "Software Solutions","Solverminds pvt ltd"
    ]

    this.Projects = [
      "Project A","Project B","Project C","Project D","Project E"
    ]
    
    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();

    this.TeamMembers = this.dashboardService.getTeamMembers();

  }

  OnProjectChange($event:any){
    if($event.target.innerHTML == "Project A"){
      this.ProjectCost = 7263345;
      this.CurrentExpenditure = 34583;
      this.AvailableFunds = 356464;
    }
    else if($event.target.innerHTML == "Project B"){
      this.ProjectCost = 868752;
      this.CurrentExpenditure = 11252;
      this.AvailableFunds = 298614;
    }
    else if($event.target.innerHTML == "Project C"){
      this.ProjectCost = 87248934;
      this.CurrentExpenditure = 4254376;
      this.AvailableFunds = 986954;
    }
    else if($event.target.innerHTML == "Project D"){
      this.ProjectCost = 1198632;
      this.CurrentExpenditure = 9646536;
      this.AvailableFunds = 240248;
    }
    else if($event.target.innerHTML == "Project E"){
      this.ProjectCost = 5365764;
      this.CurrentExpenditure = 98685;
      this.AvailableFunds = 4325387;
    }
    else{

    }
    
  }

}
