import {Component, OnInit} from '@angular/core';
import {CourseNavigatorServiceClient} from '../services/CourseNavigatorServiceClient';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses = [];
  constructor(private service: CourseNavigatorServiceClient) {
  }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
