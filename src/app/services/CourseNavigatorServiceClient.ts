import {Injectable} from '@angular/core';

@Injectable()
export class CourseNavigatorServiceClient {

  findAllCourses = () => {
      return fetch('https://obscure-plateau-23987.herokuapp.com/api/course').
      then(response => response.json());
  }
  findCourseById = (cid) => {
    return fetch('https://obscure-plateau-23987.herokuapp.com/api/course' + cid)
      .then(response => response.json());
  }
}
