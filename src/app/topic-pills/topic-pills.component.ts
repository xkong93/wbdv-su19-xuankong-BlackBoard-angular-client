import { Component, OnInit } from '@angular/core';
import {TopicServiceClient} from '../services/TopicServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  courseId = '';
  moduleId = '';
  lessonId = '';
  topicId = '';
  topcis = [];
  constructor(private service: TopicServiceClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.lessonId = params['lid'];
      this.courseId = params['cid'];
      this.moduleId = params['mid'];
      this.topicId = params['tid'];
      this.service.findTopicsForLesson(this.lessonId)
        .then(topics => this.topcis = topics);
    });
  }

}
