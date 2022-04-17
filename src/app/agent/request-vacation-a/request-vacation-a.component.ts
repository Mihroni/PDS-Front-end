import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VacationRequestModel } from '../agent';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-request-vacation-a',
  templateUrl: './request-vacation-a.component.html',
  styleUrls: ['./request-vacation-a.component.css']
})
export class RequestVacationAComponent  {

  constructor(private http: HttpClient,
    private agentService:AgentService) { }


    vacation:VacationRequestModel = {

      startDate:new Date(),
      endDate: new Date(),
      description:'',
      vacationType:''
  
    }

  requestVacation(){
    let result = this.http.put(this.agentService.baseAgentURL + '/requestVacation', this.vacation).subscribe((response) => {
      if (response) {
          // this.router.navigate(['/']);
        
      } else {
          alert("Something went wrong.")
      }
  });
  }


}