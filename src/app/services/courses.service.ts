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

  constructor(public afs: AngularFirestore) {
    this.coursesCollection = this.afs.collection('courses');
    this.courses$ = this.coursesCollection.valueChanges();
    this.courseListTableColumns = ['courseTitle', 'catagoryAbbreviation', 'catagory', 'courseId'];
  }
}
