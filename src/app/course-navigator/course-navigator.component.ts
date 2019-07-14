import {Component, OnInit} from '@angular/core';
import {CourseNavigatorServiceClient} from '../services/CourseNavigatorServiceClient';
import {Router} from '@angular/router';
@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses = [];
  selectedCourse = {
    id: '',
    modules: []
  };
  selectedModule = {
    lessons: []
  };
  selectedLesson = {
    topics: []
  };
  selectedTopic = {
    widgets: []
  };

  selectedWidget = {
  };
  constructor(private router: Router, private service: CourseNavigatorServiceClient) {
  }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

  selectCourse = course => {
    this.selectedCourse = course;
    // console.log(this.selectedCourse)
    // this.router.navigate(['/course-list/', this.selectedCourse.id]); //it will match json field

  }

  selecteModule = module => {
    this.selectedModule = module;

  }

  selectLesson = lesson => {
    this.selectedLesson = lesson;
  }

  selectTopic = topic => {
    this.selectedTopic = topic;
  }
  selectWidget = widget => {
    this.selectedWidget = widget;
  }
}
