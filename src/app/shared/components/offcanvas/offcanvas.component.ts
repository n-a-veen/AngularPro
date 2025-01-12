import { Component } from '@angular/core';

@Component({
  selector: 'app-off-canvas',
  standalone: true,
  imports: [],
  templateUrl: './offcanvas.component.html',
  styleUrl: './offcanvas.component.scss'
})
export class OffcanvasComponent {
  toggleClass5 = "line";
  isContentVisible5 = false;
  toggleInput5() {
    this.isContentVisible5 = !this.isContentVisible5;
    if (this.toggleClass5 === "line") {
      this.toggleClass5 = "s-slash-line";
    } else {
      this.toggleClass5 = "line";
    }
  }  
}
