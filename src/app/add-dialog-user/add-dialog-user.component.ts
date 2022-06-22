import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-add-dialog-user',
  templateUrl: './add-dialog-user.component.html',
  styleUrls: ['./add-dialog-user.component.scss']
})
export class AddDialogUserComponent implements OnInit {
  user = new User();
  birthDate: Date = new Date();
  loading = false;

  constructor(public dialogRef: MatDialogRef<AddDialogUserComponent>, private firestore: AngularFirestore) { }

  
  ngOnInit(): void {
    
  }

  onNoClick(){
    this.dialogRef.close();
  }

  saveUser(){
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    console.log('user', this.user);

    this.firestore
      .collection('users')
      .add(this.user.toJSON())
      .then((result:any) => {
        console.log(result);
        this.loading = false;
      })
    }

}
