import { TitleService } from './../title.service';
import { Component, OnInit } from '@angular/core';
// import * as Typed from 'typed.js';
import Typed from 'typed.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: TitleService) {
    titleService.setTitle('About');
  }

  ngOnInit() {

    // How old am I?
    const birthday = new Date('April 7, 1992');
    const ageDifMs = +Date.now() - +birthday;
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    const ageInYears = (Math.abs(ageDate.getUTCFullYear() - 1970));

    // How long have I been in industry?
    const firstDay = new Date('March 1, 2018');
    const ageDifMsI = +Date.now() - +firstDay;
    const ageDateI = new Date(ageDifMsI); // miliseconds from epoch
    const ageInYearsI = (Math.abs(ageDateI.getUTCFullYear() - 1970));

    const commonAnimationSettings = {
      typeSpeed: 20,
      backSpeed: 50,
      showCursor: true,
      cursorChar: '|',
      loop: false
    };

    const name = new Typed('#name', { ...commonAnimationSettings, strings: ['Sam Kavanagh'], startDelay: 0 }) ;
    const age = new Typed('#age', { ...commonAnimationSettings, strings: [ageInYears.toString()], startDelay: 500 });
    const nationality = new Typed('#nationality', { ...commonAnimationSettings, strings: ['New Zealand'], startDelay: 1000 });
    const career = new Typed('#career', { ...commonAnimationSettings, strings: ['Nerd', 'Web Developer'], startDelay: 2000 });
    const industry = new Typed('#years-in-industry', { ...commonAnimationSettings, strings: [ageInYearsI.toString()], startDelay: 3800 });
    const education = new Typed('#education', { ...commonAnimationSettings, strings: ['PhD, Computer Science'], startDelay: 4500 });

  }

}
