import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule,NgSelectModule,MatDatepickerModule, FlatpickrModule],
  providers: [FlatpickrDefaults],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
  dynamicForm: FormGroup | any;
   @Input() formConfig:any;
   @Input() formName: string ='';
   @Input() columnCount: number =4;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }


  private createForm(): void {
    const formGroup: any = {};
    this.formConfig.fields.forEach((field: { id: string | number; disabled: any; }) => {
      formGroup[field.id] = [{ value: '', disabled: field.disabled || false }];
    });

    this.dynamicForm = this.fb.group(formGroup);
    this.loadFormData();
  }

  loadFormData() {
    if(sessionStorage.getItem('formSaved')) {
      this.dynamicForm.patchValue(JSON.parse(sessionStorage.getItem('formSaved')!));
    }
  }

  onSubmit(): void {    
    if (this.dynamicForm.valid) {
      sessionStorage.setItem('formSaved', JSON.stringify(this.dynamicForm.value));
    } else {
      this.dynamicForm.markAllAsTouched();
    }
  }

}
