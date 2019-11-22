import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public blogPosts$: Observable<any>;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.blogPosts$ = this.contentfulService.getEntries('blogPost', 3);
  }

}
