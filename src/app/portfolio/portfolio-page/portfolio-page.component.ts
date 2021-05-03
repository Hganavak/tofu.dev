import { TitleService } from './../../title.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from 'src/app/contentful.service';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {

  private portfolioItemSlug: string;
  public portfolioItem;

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService,
    private _titleService: TitleService
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe( paramMap =>
      this.portfolioItemSlug = paramMap.get('id')
    );

  this.contentfulService.getPortfolioItemBySlug(this.portfolioItemSlug).subscribe(res => { 
    this.portfolioItem = res;
    this._titleService.setTitle('Portfolio - ' + res['title']);
  });

  }

}
