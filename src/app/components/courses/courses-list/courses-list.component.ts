import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';
import { Observable } from 'rxjs';
import { Course } from '../course';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})

export class CoursesListComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(public coursesService: CoursesService) {
   }

  ngOnInit() {
  }

  ngOnDestroy(){

    
  }

}
