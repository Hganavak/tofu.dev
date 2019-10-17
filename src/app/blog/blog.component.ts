import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogPost$: Observable<any>;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.logContent('5qCY28J8NjC0XVIE4UU9HN');
    this.blogPost$ = this.contentfulService.getContent('5qCY28J8NjC0XVIE4UU9HN');
  }

}
