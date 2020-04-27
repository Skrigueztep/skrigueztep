import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  technologies: Technology[];

  constructor() {
    this.technologies = [
      { name: 'angular', imageURL: '../../../../../assets/images/angular.png' },
      { name: 'Android', imageURL: '../../../../../assets/images/android.png' },
      { name: 'DevOps', imageURL: '../../../../../assets/images/devops.png' }
    ];
  }

  ngOnInit(): void {
  }

}

export interface Technology {
  name: string;
  imageURL: string;
}
