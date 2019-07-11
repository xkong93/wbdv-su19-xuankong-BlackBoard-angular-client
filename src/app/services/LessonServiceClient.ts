import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findAllLessons = () => {
    return fetch('http://localhost:8080/api/lesson').then(response => response.json());
  }

  findModuleById = (lid) => {
        return fetch('http://localhost:8080/api/lesson/' + lid)
      .then(response => response.json());
  }

  findLessonsForModule = (mid) => {
    return fetch('http://localhost:8080/api/lesson/' + mid + '/lesson')
      .then(response => response.json());
  }
}
