import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [SharedModule, MatDialogModule, DynamicFormComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

}
