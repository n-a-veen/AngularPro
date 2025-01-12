import { Component } from '@angular/core';
import { OffcanvasComponent } from '../offcanvas/offcanvas.component';
import { DataGridComponent } from '../data-grid/data-grid.component';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { SharedModule } from '../../shared.module';
import { DataTable } from '../data-grid/model/model';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-expansion-panel',
  standalone: true,
  imports: [SharedModule, OffcanvasComponent, DataGridComponent, DynamicFormComponent,MatDialogModule],
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.scss'
})
export class ExpansionPanelComponent {
  toggleClass5 = "line";
  isContentVisible5 = false; 
  public records = [
    { id: 1, serviceType: "Move To Bank", name: "Move To Bank Service 1", details: "Details about Move To Bank service 1" },
    { id: 2, serviceType: "Move To Bank", name: "Move To Bank Service 2", details: "Details about Move To Bank service 2" },
    { id: 3, serviceType: "NSDL Pan Card", name: "NSDL Pan Card Service 1", details: "Details about NSDL Pan Card service 1" },
    { id: 4, serviceType: "NSDL Pan Card", name: "NSDL Pan Card Service 2", details: "Details about NSDL Pan Card service 2" },
    { id: 5, serviceType: "Money Transfer", name: "Money Transfer Service 1", details: "Details about Money Transfer service 1" },
    { id: 6, serviceType: "Money Transfer", name: "Money Transfer Service 2", details: "Details about Money Transfer service 2" },
    { id: 7, serviceType: "Fund Request", name: "Fund Request Service 1", details: "Details about Fund Request service 1" },
    { id: 8, serviceType: "Fund Request", name: "Fund Request Service 2", details: "Details about Fund Request service 2" },
    { id: 9, serviceType: "Fund Transfer", name: "Fund Transfer Service 1", details: "Details about Fund Transfer service 1" },
    { id: 10, serviceType: "Fund Transfer", name: "Fund Transfer Service 2", details: "Details about Fund Transfer service 2" },
    { id: 11, serviceType: "Bill Payment", name: "Bill Payment Service 1", details: "Details about Bill Payment service 1" },
    { id: 12, serviceType: "Bill Payment", name: "Bill Payment Service 2", details: "Details about Bill Payment service 2" },
    { id: 13, serviceType: "UPI Collection", name: "UPI Collection Service 1", details: "Details about UPI Collection service 1" },
    { id: 14, serviceType: "UPI Collection", name: "UPI Collection Service 2", details: "Details about UPI Collection service 2" },
    { id: 15, serviceType: "LIC Bill Payment", name: "LIC Bill Payment Service 1", details: "Details about LIC Bill Payment service 1" },
    { id: 16, serviceType: "LIC Bill Payment", name: "LIC Bill Payment Service 2", details: "Details about LIC Bill Payment service 2" },
    { id: 17, serviceType: "AEPS", name: "AEPS Service 1", details: "Details about AEPS service 1" },
    { id: 18, serviceType: "AEPS", name: "AEPS Service 2", details: "Details about AEPS service 2" },
    { id: 19, serviceType: "Aadhar Pay", name: "Aadhar Pay Service 1", details: "Details about Aadhar Pay service 1" },
    { id: 20, serviceType: "Aadhar Pay", name: "Aadhar Pay Service 2", details: "Details about Aadhar Pay service 2" },
    { id: 21, serviceType: "Micro ATM", name: "Micro ATM Service 1", details: "Details about Micro ATM service 1" },
    { id: 22, serviceType: "Micro ATM", name: "Micro ATM Service 2", details: "Details about Micro ATM service 2" },
    { id: 23, serviceType: "Fino CMS", name: "Fino CMS Service 1", details: "Details about Fino CMS service 1" },
    { id: 24, serviceType: "Fino CMS", name: "Fino CMS Service 2", details: "Details about Fino CMS service 2" },
    { id: 25, serviceType: "Mobile Recharge", name: "Mobile Recharge Service 1", details: "Details about Mobile Recharge service 1" },
    { id: 26, serviceType: "Mobile Recharge", name: "Mobile Recharge Service 2", details: "Details about Mobile Recharge service 2" },
    { id: 27, serviceType: "DTH Recharge", name: "DTH Recharge Service 1", details: "Details about DTH Recharge service 1" },
    { id: 28, serviceType: "DTH Recharge", name: "DTH Recharge Service 2", details: "Details about DTH Recharge service 2" },
    { id: 29, serviceType: "Fast Tag", name: "Fast Tag Service 1", details: "Details about Fast Tag service 1" },
    { id: 30, serviceType: "Fast Tag", name: "Fast Tag Service 2", details: "Details about Fast Tag service 2" }
  ];
 
  public tableConfig: DataTable = {
    tableHeading: 'Service Details',
    columns: [
      { name: 'ID', field: 'id', width: '150' },
      { name: 'Service Type', field: 'serviceType', width: '150' },
      { name: 'Service Name', field: 'name', width: '200' },
      { name: 'Service Details', field: 'details', width: '200' },
    ],
    handlers: [
      {
        text: 'Edit',
        title: 'Edit Service',
        type: 'info',
        icon: 'ri-pencil-line',
        color: 'primary'
      },
      {
        text: 'Delete',
        title: 'Delete Service',
        type: 'danger',
        icon: 'ri-delete-bin-line',
        color: 'warn'
      }
    ],
    config: {
      sorting: { column: 'id', order: 'desc' },
      pageSizeOptions: [5, 10],
      pageSize: 5
    },
    isRowClickable: false,
    isSearchable: true,
  };

  public formConfig = {
    "fields": [
      {
        "type": "text",
        "label": "Input",
        "placeholder": "Enter text",
        "class": "form-control",
        "id": "basic-input",
        validators: [{ isRequired:true, message: 'Input is required' }]
      },
      {
        "type": "email",
        "label": "Email",
        "placeholder": "example@domain.com",
        "class": "form-control",
        "id": "email-input",
        "validators": [{ isRequired:true, message: 'Email is required' }]
      },
      {
        "type": "password",
        "label": "Password",
        "placeholder": "Enter your password",
        "class": "form-control",
        "id": "password-input",
        "validators": [{ isRequired:true, message: 'Password is required' }]
      },
      {
        "type": "date",
        "label": "Date",
        "placeholder": "",
        "class": "form-control",
        "id": "date-input",
        "validators": [{ isRequired:true, message: 'Date is required' }]
      },
      {
        "type": "time",
        "label": "Time",
        "placeholder": "",
        "class": "form-control",
        "id": "time-input",
        "validators": [{ isRequired:true, message: 'Time is required' }]
      },
      {
        "type": "dateRange",
        "label": "Date Range",
        "placeholder": "",
        "class": "form-control",
        "id": "daterange-input",
        "validators": [{ isRequired:false}]
      },
      {
        "type": "dateTime",
        "label": "Date & Time",
        "placeholder": "",
        "class": "form-control",
        "id": "datetime-input",
        "validators": [{ isRequired:false}]
      },
      {
        "type": "url",
        "label": "Website",
        "placeholder": "https://example.com",
        "class": "form-control",
        "id": "url-input",
        "validators": [{ isRequired:false}]
      },
      {
        "type": "checkbox",
        "label": "Accept Terms",
        "placeholder": "",
        "class": "form-check-input",
        "id": "checkbox-input",
        "validators": [{ isRequired:false}]
      },
      {
        "type": "radio",
        "label": "Gender",
        "options": [
          { "label": "Male", "value": "male" },
          { "label": "Female", "value": "female" },
          { "label": "Other", "value": "Other" }
        ],
        "class": "form-check-input",
        "id": "radio-input",
        "validators": [{ isRequired:true, message: 'Gender is required' }]
      },
      {
        type: 'dropdown',
        id: 'country',
        label: 'Country',
        options: [
          { value: 'us', label: 'United States' },
          { value: 'ca', label: 'Canada' },
          { value: 'uk', label: 'United Kingdom' },
        ],
        class: 'form-control',
        "validators": [{ isRequired:true, message: 'Country is required' }]
      },
      {
        type: 'multiselect',
        id: 'skills',
        label: 'Skills',
        options: [
          { value: 'html', label: 'HTML' },
          { value: 'css', label: 'CSS' },
          { value: 'js', label: 'JavaScript' },
        ],
        class: 'form-control',
        "validators": [{ isRequired:false}]
      },
      {
        type: 'file',
        id: 'resume',
        label: 'Resume',
        class: 'form-control',
        "validators": [{ isRequired:false}]
      },
      {
        "type": "text",
        "label": "Disabled Input",
        "placeholder": "Disabled",
        "class": "form-control",
        "id": "disabled-input",
        "validators": [{ isRequired:false}],
        "disabled": true
      },
      {
        "type": "textarea",
        "label": "Message",
        "placeholder": "Enter your message",
        "class": "form-control",
        "id": "textarea-input",
        "validators": [{ isRequired:true, message: 'Message is required' }]
      }
    ]
  };

  constructor(public dialog: MatDialog){}
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
