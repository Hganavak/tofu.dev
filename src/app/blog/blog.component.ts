import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Observable } from 'rxjs';
// import { MdToHtmlPipe } from '../md-to-html.pipe';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogPost$: Observable<any>;
  blogPosts$: Observable<any>;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    // this.contentfulService.logContent('5qCY28J8NjC0XVIE4UU9HN');
    this.blogPosts$ = this.contentfulService.getEntries('blogPost');
    this.blogPost$ = this.contentfulService.getContent('5qCY28J8NjC0XVIE4UU9HN');
  }

}
