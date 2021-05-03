import { Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private _TITLE_PREPEND_STRING = 'Tofu.dev | ';

  constructor(public defaultTitleService: Title) { }

  setTitle(title: string, disablePrepend: boolean = false) {
    this.defaultTitleService.setTitle(
      disablePrepend ? 
        title :
        this._TITLE_PREPEND_STRING + title
      )
  }
}
