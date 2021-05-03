import { TitleService } from './../title.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Observable } from 'rxjs';
import * as GitHubCalendar from 'node_modules/github-calendar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public blogPosts$: Observable<any>;
  public portfolioItems$: Observable<any>;

  constructor(private contentfulService: ContentfulService, titleService: TitleService) {
    titleService.setTitle('Sam Kavanagh')
   }

   ngAfterViewInit() {

    // Load GitHub contribution calendar
    GitHubCalendar(".github-calendar", "Hganavak", {
      summary_text: '',
      global_stats: true,
      responsive: true
    });

   }

  ngOnInit() {
    this.blogPosts$ = this.contentfulService.getEntries('blogPost', 3);
    this.portfolioItems$ = this.contentfulService.getEntries('portfolioItem');


  }

}
