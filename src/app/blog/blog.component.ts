import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

// import { MdToHtmlPipe } from '../md-to-html.pipe';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogPost$: Observable<any>;
  blogPosts$: Observable<any>;

  indBlogPost$: Observable<any>;

  constructor(
    private contentfulService: ContentfulService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    // this.contentfulService.logContent('5qCY28J8NjC0XVIE4UU9HN');
    this.blogPosts$ = this.contentfulService.getEntries('blogPost');
    // this.blogPost$ = this.contentfulService.getContent('5qCY28J8NjC0XVIE4UU9HN');
    // this.indBlogPost$ = this.contentfulService.getBlogPostBySlug('5qCY28J8NjC0XVIE4UU9HN');


    // console.log(this.blogPosts$[0]);


    // Get route info
    this.route.paramMap.pipe(
      tap(x => console.log(x))
    // switchMap((params: ParamMap) =>
      // this.service.getHero(params.get('id')))
    );
  }

}
