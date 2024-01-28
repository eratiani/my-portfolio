import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  public scrollSubject: Subject<string> = new Subject<string>();

  scrollSection(section: string) {
    this.scrollSubject.next(section);
  }
}
