import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findAllLessons = () => {
    return fetch('https://obscure-plateau-23987.herokuapp.com/api/lesson').then(response => response.json());
  }

  findModuleById = (lid) => {
        return fetch('https://obscure-plateau-23987.herokuapp.com/api/lesson/' + lid)
      .then(response => response.json());
  }

  findLessonsForModule = (mid) => {
    return fetch('https://obscure-plateau-23987.herokuapp.com/api/module/' + mid + '/lesson')
      .then(response => response.json());
  }
}
