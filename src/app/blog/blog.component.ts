import { TitleService } from './../title.service';
import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

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
    private titleService: TitleService
    ) { 
      titleService.setTitle('Blog')
    }

  ngOnInit() {
    this.blogPosts$ = this.contentfulService.getEntries('blogPost');
  }

}
