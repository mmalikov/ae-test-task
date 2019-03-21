import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TextService {
  private selection: Selection;
  private selectionSubject$: BehaviorSubject<Selection> = new BehaviorSubject(this.getSelection());
  public selection$ = this.selectionSubject$.asObservable();

  constructor() {
    this.subscribeForSelectionChanges();
    this.selection$.subscribe(selection => console.log('[ TextService this.selection$ ]', selection));
  }

  getSelection() {
    return this.selection = window.getSelection();
  }

  getMockText() {
    return new Promise<string>(resolve => {
      resolve(`A year ago I was in the audience at a gathering of designers in San Francisco.
        There were four designers on stage, and two of them worked for me. I was there to support them.
        The topic of design responsibility came up, possibly brought up by one of my designers, I honestly don’t remember the details.
        What I do remember is that at some point in the discussion I raised my hand and suggested, to this group of designers,
        that modern design problems were very complex. And we ought to need a license to solve them.`);
    });
  }

  private subscribeForSelectionChanges() {
    document.addEventListener('selectionchange', (event) => {
      this.selectionSubject$.next(this.getSelection());
    });
  }
}
