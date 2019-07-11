import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonServiceClient} from '../services/LessonServiceClient';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  courseId = '';
  moduleId = '';
  lessonId = '';
  lessons = [];
  constructor(private route: ActivatedRoute, private service: LessonServiceClient) { }

  ngOnInit() {
      this.route.params.subscribe(
        params => {
          if (params['mid'] === undefined) { //fixed undefined mid bug
            this.moduleId = '1';
          } else {
            this.moduleId = params['mid'];
          }
          this.courseId = params['cid'];
          this.lessonId = params['lid'];
          this.service.findLessonsForModule(this.moduleId)
            .then(lessons => this.lessons = lessons);
        }
      );
  }

}
