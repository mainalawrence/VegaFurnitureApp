import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UserStateService } from '../../../Services/user-state.service';


@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent {

  closeResult = '';
   role:any;
  constructor(private modalService: NgbModal,private userStateService:UserStateService) {}

@Input() user:any={}

OnHandleUpdateUser(value:any){

let data={
deleted:  this.user.deleted,
email:this.user.email,
firstName:this.user.firstName,
image:this.user.image,
lastName:this.user.lastName,
password:this.user.password,
role:value
}
this.userStateService.UpdateUsers(data,this.user.id).subscribe(res=>{
console.log(res);

})
 
}
open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
