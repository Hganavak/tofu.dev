import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from 'src/environments/environment';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { markViewDirty } from '@angular/core/src/render3/instructions';

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

  getContent(contentId) {
    return from(this.client.getEntry(contentId)).pipe( // Convert the ContentfulClients promise object to an observable
      map(entry => entry.fields) // Strip the Contentful metadata and just leave the entry fields
    );
  }

  // Console log a piece of Content for testing
  logContent(contentId) {
    this.client.getEntry(contentId)
      .then(entry => console.log(entry));
  }

}
