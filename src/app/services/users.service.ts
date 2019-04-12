import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../services/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersCollection: AngularFirestoreCollection<User>;
  users$: Observable<User[]>;

  constructor(public afs: AngularFirestore) {
    this.usersCollection = this.afs.collection('users');
    this.users$ = this.usersCollection.valueChanges();
  }

  getUsers() {
    return this.users$;

  }

}
