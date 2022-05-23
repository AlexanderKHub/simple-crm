import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  loading = false;
  user: User = new User();
  userid: string = '';

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, public firestore: AngularFirestore) { }
  birthDate: Date = new Date();
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
    .doc(this.userid)
    .update(this.user)
    .then(()=>{
      this.loading = false;
      this.dialogRef.close();
    })
  }
}
