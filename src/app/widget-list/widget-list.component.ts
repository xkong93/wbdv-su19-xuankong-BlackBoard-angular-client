import { Component, OnInit } from '@angular/core';
import {WidgetServiceClient} from '../services/WidgetServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  courseId = '';
  moduleId = '';
  lessonId = '';
  topicId = '';
  widgetId = '';
  widgets = [];
  constructor(private service: WidgetServiceClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.lessonId = params['lid'];
      this.courseId = params['cid'];
      this.moduleId = params['mid'];
      this.topicId = params['tid'];
      this.widgetId = params['wid'];
      this.service.findWidgetsForTopic(this.topicId)
        .then(widgets => this.widgets = widgets);
    });
  }

}
