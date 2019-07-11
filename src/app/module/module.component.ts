import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModuleServiceClient} from '../services/ModuleServiceClient';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {


  modules: [];

  constructor(private activatedRoute: ActivatedRoute, private moduleServiceClient: ModuleServiceClient) {
  }

  ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            console.log(this.moduleServiceClient.findModulesForCourse(params['cid']));
    });
  }

  // selectModule = (module) => {
  //   this.selectedCourse = module;
  // }
}
