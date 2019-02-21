import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User, Staff } from './user.model';


@Injectable({ providedIn: 'root' })
export class AuthService {

  user$: Observable<User>;

  constructor(
      private afAuth: AngularFireAuth,
      private afs: AngularFirestore,
      private router: Router
  ) {

    // Get the auth state, then fetch the Firestore user document or return null
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
          // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          
        } else {
          // Logged out
          return of(null);
        }
      })
    )  
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const staffRef: AngularFirestoreDocument<Staff> = this.afs.doc(`staff/${user.email}`);

    const staff$ = staffRef.valueChanges();
    staff$.subscribe( staff =>{


      const data: User = { 
        uid: user.uid, 
        email: user.email, 
        displayName: user.displayName, 
        photoURL: user.photoURL,
        roles: {
          viewer: staff.roles.viewer
        },
        kcusdId: staff.kcusdId,
        position: staff.position,
        gradeLevel: staff.gradeLevel,
        classDescription: staff.classDescription,
        courses: staff.courses,
        firstName: staff.firstName,
        lastName: staff.lastName,
        hireDate: staff.hireDate,
        site: staff.site,
        subjectArea: staff.subjectArea,
        

      }
      userRef.set(data, { merge: true })
    }
    )
    return
  }


  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }



  canRead(user: User): boolean {
    const allowed = [ 'viewer', 'participant', 'presenter', 'analyst', 'admin' ]
    return this.checkAuthorization(user, allowed)
  }

  canEdit(user: User): boolean {
    const allowed = [ 'participant', 'presenter', 'analyst', 'admin' ]
    return this.checkAuthorization(user, allowed)
  }
  
  candDelete(user: User): boolean {
    const allowed = [ 'admin' ]
    return this.checkAuthorization(user, allowed)
  }

  private checkAuthorization(user: User, allowedRoles: string[]): boolean{
    if(!user) return false
    for (const role of allowedRoles){
      if( user.roles[role] ){
        return true
      }
    }
    return false
  }


 

}
