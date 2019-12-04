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
  public portfolioItem$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe( paramMap =>
      this.portfolioItemSlug = paramMap.get('id')
    );

    this.portfolioItem$ = this.contentfulService.getPortfolioItemBySlug(this.portfolioItemSlug); // Implement

  }

}
