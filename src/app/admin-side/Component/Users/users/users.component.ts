import { Component, OnInit ,Input} from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserStateService } from '../../../Services/user-state.service';


@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UserComponent implements OnInit {

  myform:any;
  updateId:string='';

  @Input() Users:any=[]; 

  pagesUsers:any;
  page = 1;
  pageSize =10;
  collectionSize = this.Users.length;


  constructor(private userStateService:UserStateService) {}
  ngOnInit(): void {}


  ngOnChanges(){
  this.collectionSize = this.Users.length;
 this.refreshUsers();
  
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
