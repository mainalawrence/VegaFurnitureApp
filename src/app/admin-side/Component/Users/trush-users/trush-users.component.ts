import { Component, OnInit } from '@angular/core';
import { UserStateService } from '../../../Services/user-state.service';

@Component({
  selector: 'app-trush-users',
  templateUrl: './trush-users.component.html',
  styleUrls: ['./trush-users.component.css']
})
export class TrushUsersComponent implements OnInit {
  Users:any[]=[]
  constructor(private userStateService:UserStateService) { }
 pagesUsers:any;
  page = 1;
  pageSize =10;
  collectionSize = this.Users.length;
  ngOnInit(): void {
    this.userStateService.getTrushUsers().subscribe(res=>{
        this.Users=res;
       this.collectionSize = this.Users.length;
       this.refreshUsers();
    })
  }

  refreshUsers() {
    this.pagesUsers =this.Users.map((user:any,i:any)=> ({_id: i + 1, ...user})).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  updateUser(id:string){
   console.log(this.Users.filter((user:any)=>{
     if(user.id===id) return user;
     return;
   })[0]);
   
    
  }
  deleteUser(id:string){
    this.userStateService.trushUsers(id).subscribe(res=>{
      console.log(res);
    })
  }

}
