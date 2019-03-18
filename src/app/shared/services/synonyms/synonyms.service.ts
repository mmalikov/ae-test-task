import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

interface IDatamuseReponse {
  word: string;
  score: number;
}

@Injectable()
export class SynonymsService {
  API_ENDPOINT = '/synonyms/words?rel_syn=';

  private optionsSubject$: BehaviorSubject<any> = new BehaviorSubject([]);
  public options$ = this.optionsSubject$.asObservable();

  constructor(
    private http: HttpClient,
  ) {
  }

  load(word: string) {
    return this.http.get(this.buildWordSynonymUrl(word)).pipe(
      map((response: [IDatamuseReponse]) => response.map(r => r.word)),
      map((words: [string]) => this.optionsSubject$.next(words))
    );
  }

  private buildWordSynonymUrl(word: string) {
    return `${this.API_ENDPOINT}${word}`;
  }
}
