import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  subject = new BehaviorSubject(false);

  subject_ok = this.subject.asObservable();

  constructor() {}

  setOK() {
    this.subject.next(true);
  }
}
