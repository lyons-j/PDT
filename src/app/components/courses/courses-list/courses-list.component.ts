import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  constructor(public coursesService: CoursesService) { }

  ngOnInit() {
  }

}
