import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  softSkills: string[];
  hardSkills: string[];

  constructor() {
    this.softSkills = [
      'Typescript',
      'MongoDB',
      'ExpressJS',
      'Angular',
      'HTML',
      'CSS',
      'Java',
      'Kotlin',
      'Git & Github',
      'Advance Wordpress Development',
      'Shell Scripting'
    ];
    this.hardSkills = [
      'Ubuntu, RHEL (6 & 7)',
      'Solaris (Unix)'
    ];
  }

  ngOnInit(): void {
  }

}
