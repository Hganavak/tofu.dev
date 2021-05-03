import { TitleService } from './../../title.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { ContentfulService } from '../../contentful.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  private blogPostSlug: string;
  public blogPost;

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService,
    private titleService: TitleService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap =>
      this.blogPostSlug = paramMap.get('id')
    );

    this.contentfulService.getBlogPostBySlug(this.blogPostSlug).subscribe(res => {
      this.blogPost = res;
      this.titleService.setTitle('Blog - ' + res['title']);
    });

  }

}
