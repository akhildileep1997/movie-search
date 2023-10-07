import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  additionalDetail:boolean=false
  searchTerm:string=''
  details:any=[]
  error:string=''
  constructor(private api:ApiService){}
  ngOnInit(): void {
  }
  search(event:any){
   this.searchTerm=event.target.value
   console.log(this.searchTerm);
   
  }

    additional(){
      return this.api.additionalDetails(this.searchTerm).subscribe((result:any)=>{
        console.log(result);
        this.details=result
        this.additionalDetail=true
        this.error=result.Error
      })
    }

  
  }


