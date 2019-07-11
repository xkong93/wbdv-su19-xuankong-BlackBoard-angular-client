import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  findAllModules = () => {
    return fetch('http://localhost:8080/api/module').then(response => response.json());
  }

  findModuleById = (mid) => {
    return fetch('http://localhost:8080/api/module/' + mid)
      .then(response => response.json());
  }

  findModulesForCourse = (cid) => {
    return fetch('http://localhost:8080/api/course/' + cid + '/module')
      .then(response => response.json());
  }
}
