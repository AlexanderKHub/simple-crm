import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { AddDialogUserComponent } from '../add-dialog-user/add-dialog-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  allUsers:any = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
    .collection('users')
    .valueChanges({idField: 'id'})
    .subscribe((changes:any)=>{
      this.allUsers = changes;
      console.log(this.allUsers);
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDialogUserComponent, {
    });
  }
}
