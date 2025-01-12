import { Component } from '@angular/core';
import { DataGridComponent } from '../../../../../../shared/components/data-grid/data-grid.component';
import { DynamicFormComponent } from '../../../../../../shared/components/dynamic-form/dynamic-form.component';
import { DataTable } from '../../../../../../shared/components/data-grid/model/model';

@Component({
  selector: 'app-new-mobile-recharge',
  standalone: true,
  imports: [DataGridComponent, DynamicFormComponent,],
  templateUrl: './new-mobile-recharge.component.html',
  styleUrl: './new-mobile-recharge.component.scss'
})
export class NewMobileRechargeComponent {
   public rechargePlans = [
    {
      circle: "Delhi NCR",
      planType: "TOPUP",
      validity: "N/A",
      description: "Talktime of Rs. 7.47, Talktime validity Unrestricted, No Service Validity available with this Talktime Pack",
      price: "Rs. 10"
    },
    {
      circle: "Delhi NCR",
      planType: "TOPUP",
      validity: "N/A",
      description: "Talktime of Rs. 14.95, Talktime validity Unrestricted, No Service Validity available with this Talktime Pack",
      price: "Rs. 20"
    },
    {
      circle: "Delhi NCR",
      planType: "TOPUP",
      validity: "N/A",
      description: "Talktime of Rs. 22.42, Talktime validity Unrestricted, No Service Validity available with this Talktime Pack",
      price: "Rs. 30"
    },
    {
      circle: "Delhi NCR",
      planType: "TOPUP",
      validity: "N/A",
      description: "Talktime of Rs. 37.29, Talktime validity Unrestricted, No Service Validity available with this Talktime Pack",
      price: "Rs. 50"
    },
    {
      circle: "Delhi NCR",
      planType: "TOPUP",
      validity: "N/A",
      description: "Talktime of Rs. 74.58, Talktime validity Unrestricted, No Service Validity available with this Talktime Pack",
      price: "Rs. 100"
    },
    {
      circle: "Delhi NCR",
      planType: "TOPUP",
      validity: "N/A",
      description: "Talktime of Rs. 149.15, Talktime validity Unrestricted, No Service Validity available with this Talktime Pack",
      price: "Rs. 200"
    },
    {
      circle: "Delhi NCR",
      planType: "TOPUP",
      validity: "N/A",
      description: "Talktime of Rs. 372.87, Talktime validity Unrestricted, No Service Validity available with this Talktime Pack",
      price: "Rs. 500"
    },
    {
      circle: "Delhi NCR",
      planType: "TOPUP",
      validity: "N/A",
      description: "Talktime of Rs. 745.75, Talktime validity Unrestricted, No Service Validity available with this Talktime Pack",
      price: "Rs. 1000"
    },
    {
      circle: "Delhi NCR",
      planType: "TOPUP",
      validity: "N/A",
      description: "Talktime of Rs. 1118.63, Talktime validity Unrestricted, No Service Validity available with this Talktime Pack",
      price: "Rs. 1500"
    },
    {
      circle: "Delhi NCR",
      planType: "TOPUP",
      validity: "N/A",
      description: "Talktime of Rs. 1864.38, Talktime validity Unrestricted, No Service Validity available with this Talktime Pack",
      price: "Rs. 2500"
    }
  ];
   
    public tableConfig: DataTable = {
      tableHeading: 'Service Details',
      columns: [
        { name: 'Circle', field: 'circle', width: '120' },
        { name: 'Plan Type', field: 'planType', width: '120' },
        { name: 'Validity', field: 'validity', width: '120' },
        { name: 'Description', field: 'description', width: '250' },
        { name: 'Price', field: 'price', width: '120' },
      ],
      config: {
        sorting: { column: 'price', order: 'desc' },
        pageSizeOptions: [5, 10],
        pageSize: 7
      },
      isRowClickable: false,
      isSearchable: true,
    };

    public formConfig = {
      fields: [
        {
          type: "text",
          label: "Mobile Number",
          placeholder: "Enter Mobile Number",
          class: "form-control",
          id: "mobileNumber",
          validators: [{ isRequired:true, message: 'Mobile Number is required' }]
        },
        {
          type: 'dropdown',
          id: 'operator',
          label: 'Operator List',
          options: [
            { value: 'jio', label: 'Jio' },
            { value: 'airtel', label: 'Airtel' },
            { value: 'idea', label: 'Idea' },
          ],
          class: 'form-control',
          validators: [{ isRequired:true, message: 'Operator is required' }]
        },
        {
          type: 'dropdown',
          id: 'circle',
          label: 'Circle List',
          options: [
            { value: 'Delhi NCR', label: 'Delhi NCR' },
            { value: 'UP West', label: 'UP West' },
            { value: 'UP North', label: 'UP North' },
          ],
          class: 'form-control',
          validators: [{ isRequired:true, message: 'Circle List is required' }]
        },
        {
          type: 'text',
          id: 'rechargeAmount',
          label: 'Recharge Amount',
          placeholder: "Enter Recharge Amount",
          class: 'form-control',
          validators: [{ isRequired:true, message: 'Recharge Amount is required' }]
        },
     
      ]
    };
}
