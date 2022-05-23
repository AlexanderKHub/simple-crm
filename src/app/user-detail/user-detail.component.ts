import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User = new User();
  userid:string = '';

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    //subscribes to url which is equal to userid
    this.route.params.subscribe((params)=>{
    this.userid = params['id'];
  
      //access to the right user which is stored in firebase
      this.firestore
      .collection('users')
      .doc(this.userid)
      .valueChanges()
      .subscribe((user:any)=>{
        console.log('chosen user is', user);
        this.user = user;
      })
    })
  }

  editUserDialog(){
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = this.user;
    dialog.componentInstance.userid = this.userid;
  }

  editAddressDialog(){
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = this.user;
    dialog.componentInstance.userid = this.userid;
  }
}






