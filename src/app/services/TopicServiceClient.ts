import {Injectable} from '@angular/core';

@Injectable()
export class TopicServiceClient {
  findAllTopics = () => {
    return fetch('http://localhost:8080/api/topic').then(response => response.json());
  }

  findModuleById = (tid) => {
        return fetch('http://localhost:8080/api/topic/' + tid)
      .then(response => response.json());
  }

  findTopicsForLesson = (lid) => {
    return fetch('http://localhost:8080/api/lesson/' + lid + '/topic')
      .then(response => response.json());
  }
}
