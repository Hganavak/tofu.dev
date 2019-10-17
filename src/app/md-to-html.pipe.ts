import { Pipe, PipeTransform } from '@angular/core';
import { ContentfulService } from './contentful.service';
// import { marked } from 'marked';
import * as marked from 'marked';


@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  constructor(private contentfulService: ContentfulService) {}

  transform(value: string): any {
    return marked(value);
  }

}
