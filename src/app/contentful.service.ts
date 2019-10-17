import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {


  // Initialize Contentful client
  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }


  // Console log a piece of Content for testing
  logContent(contentId) {
    this.client.getEntry(contentId)
      .then(entry => console.log(entry));
  }

}
