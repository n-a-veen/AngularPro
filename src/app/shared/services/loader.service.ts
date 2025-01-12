import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject = new BehaviorSubject<boolean>(true);  // false means loader is hidden
  public loaderState$ = this.loaderSubject.asObservable();

  constructor() {}

  showLoader() {
    this.loaderSubject.next(true);  // Show loader
  }

  hideLoader() {
    this.loaderSubject.next(false); // Hide loader
  }

  toggleLoader() {
    this.loaderSubject.next(!this.loaderSubject.value);  // Toggle loader visibility
  }
}
