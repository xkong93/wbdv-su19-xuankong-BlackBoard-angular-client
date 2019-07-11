import {Injectable} from '@angular/core';

@Injectable()
export class CourseNavigatorServiceClient {
  findAllCourses = () => {
      return fetch('http://localhost:8080/api/course').
      then(response => response.json());
  }
  findCourseById = (cid) => {
    return fetch('http://localhost:8080/api/course/' + cid)
      .then(response => response.json());
  }
}
