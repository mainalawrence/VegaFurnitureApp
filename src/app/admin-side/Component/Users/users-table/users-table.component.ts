import { Component, OnInit } from '@angular/core';
import { UserStateService } from '../../../Services/user-state.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  users:any[]=[];
  constructor(private userStateServices:UserStateService) { }

  ngOnInit(): void {
    this.userStateServices.getUsers().subscribe(res=>{
      this.users=res  
    })
  }

}
