import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {
  loading = false;
  user:User = new User();
  userid:string = '';

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    
  }

  onNoClick(){
    this.dialogRef.close();
  }

  saveUser(){
    this.loading = true;
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
