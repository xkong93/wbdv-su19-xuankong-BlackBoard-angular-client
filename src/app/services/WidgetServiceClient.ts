import {Injectable} from '@angular/core';

@Injectable()
export class TopicServiceClient {
  findAllWidgets = () => {
    return fetch('http://localhost:8080/api/widget').then(response => response.json());
  }

  findWidgetById = (wid) => {
        return fetch('http://localhost:8080/api/widget/' + wid)
      .then(response => response.json());
  }

  findWidgetsForTopic = (tid) => {
    return fetch('http://localhost:8080/api/topic/' + tid + '/widget')
      .then(response => response.json());
  }
}
