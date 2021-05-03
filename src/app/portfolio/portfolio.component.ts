import { TitleService } from './../title.service';
import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public portfolioItems$: Observable<any>;

  constructor(
    private contentfulService: ContentfulService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: TitleService
  ) { 
    this.titleService.setTitle('Portfolio')
  }

  ngOnInit() {
    this.portfolioItems$ = this.contentfulService.getEntries('portfolioItem');
  }

}
