import {Injectable} from '@angular/core';

@Injectable()
export class TopicServiceClient {
  findAllTopics = () => {
    return fetch('https://obscure-plateau-23987.herokuapp.com/api/topic').then(response => response.json());
  }

  findLessonById = (tid) => {
        return fetch('https://obscure-plateau-23987.herokuapp.com/api/lesson/' + tid)
      .then(response => response.json());
  }

  findTopicsForLesson = (lid) => {
    return fetch('https://obscure-plateau-23987.herokuapp.com/api/lesson/' + lid + '/topic')
      .then(response => response.json());
  }
}
