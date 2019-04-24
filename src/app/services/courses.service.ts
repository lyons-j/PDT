import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Course } from '../components/courses/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  coursesCollection: AngularFirestoreCollection<Course>;
  courses$: Observable<Course[]>;
  courseListTableColumns: string[];
  subscribed: any;

  constructor(public afs: AngularFirestore) {
    this.coursesCollection = this.afs.collection('courses');
    this.courses$ = this.coursesCollection.valueChanges();
    this.subscribed = this.courses$.subscribe(data => console.log(data));
    this.courseListTableColumns = ['courseId', 'courseTitle', 'catagoryAbbreviation', 'catagory'];
  }

  ngOnDestroy(){
    this.subscribed = this.courses$
  }

}
