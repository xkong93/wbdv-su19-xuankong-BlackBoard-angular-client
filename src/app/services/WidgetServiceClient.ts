import {Injectable} from '@angular/core';

@Injectable()
export class WidgetServiceClient {
  findAllWidgets = () => {
    return fetch('https://obscure-plateau-23987.herokuapp.com/api/widget').then(response => response.json());
  }

  findWidgetById = (wid) => {
        return fetch('https://obscure-plateau-23987.herokuapp.com/api/widget/' + wid)
      .then(response => response.json());
  }

  findWidgetsForTopic = (tid) => {
    return fetch('https://obscure-plateau-23987.herokuapp.com/api/topic/' + tid + '/widget')
      .then(response => response.json());
  }
}
