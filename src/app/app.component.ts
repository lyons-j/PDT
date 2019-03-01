import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Course {
  courseId: string;
  courseTitle: string;
  courseSubTitle?:string;
  courseLevel?:string;
  catagory?:string;
  catagoryAbbreviation?:string;
  courseDescription?:string;
  badgeImageLink?:string;
  prerequisites?:string;
  courseMaterials?:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  private courseCollection: AngularFirestoreCollection<Course>;
  courses: Observable<Course[]>;
  snapshot: any;

  constructor(public auth: AuthService, private afs: AngularFirestore){ 
   
  }

  ngOnInit(){
    this.courseCollection = this.afs.collection('courses');
    this.courses = this.courseCollection.valueChanges();
    this.snapshot = this.courseCollection.snapshotChanges().subscribe(
      data => {console.log(data)}
    );
  }
  title = 'PDT';
}
