import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  findAllModules = () => {
    return fetch('https://obscure-plateau-23987.herokuapp.com/api/module').then(response => response.json());
  }

  findModuleById = (mid) => {
    return fetch('https://obscure-plateau-23987.herokuapp.com/api/module/' + mid)
      .then(response => response.json());
  }

  findModulesForCourse = (cid) => {
    return fetch('https://obscure-plateau-23987.herokuapp.com/api/course/' + cid + '/module')
      .then(response => response.json());
  }
}
