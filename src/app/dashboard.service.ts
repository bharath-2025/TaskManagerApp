import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getTeamMembersSummary() : any[]{
    var TeamMembersSummary = [
      {Region:"EAST",TeamMembersCount:20,TemperorilyUnavailableMembers:5},
      {Region:"SOUTH",TeamMembersCount:27,TemperorilyUnavailableMembers:1},
      {Region:"WEST",TeamMembersCount:13,TemperorilyUnavailableMembers:0},
      {Region:"NORTH",TeamMembersCount:19,TemperorilyUnavailableMembers:2}
    ]

    return TeamMembersSummary;
  }

  getTeamMembers(): any[]{
    let TeamMembers = [
      {Region:"East",Members:[
        {ID:1,Name:"Sam",Status:"Available"},
        {ID:2,Name:"Rahul",Status:"Available"},
        {ID:3,Name:"Sanjay",Status:"Busy"},
        {ID:4,Name:"Dev",Status:"Busy"},
      ]},
      {Region:"South",Members:[
        {ID:1,Name:"Sam",Status:"Available"},
        {ID:2,Name:"Rahul",Status:"Available"},
        {ID:3,Name:"Sanjay",Status:"Busy"},
        {ID:4,Name:"Dev",Status:"Busy"},
      ]},
      {Region:"West",Members:[
        {ID:1,Name:"Sam",Status:"Available"},
        {ID:2,Name:"Rahul",Status:"Available"},
        {ID:3,Name:"Sanjay",Status:"Busy"},
        {ID:4,Name:"Dev",Status:"Busy"},
      ]},
      {Region:"North",Members:[
        {ID:1,Name:"Sam",Status:"Available"},
        {ID:2,Name:"Rahul",Status:"Available"},
        {ID:3,Name:"Sanjay",Status:"Busy"},
        {ID:4,Name:"Dev",Status:"Busy"},
      ]},

    ]

    return TeamMembers;
  }
}
