import { Component } from '@angular/core';
import { DataGridComponent } from '../../../../../shared/components/data-grid/data-grid.component';
import { DynamicFormComponent } from '../../../../../shared/components/dynamic-form/dynamic-form.component';
import { DataTable } from '../../../../../shared/components/data-grid/model/model';

@Component({
  selector: 'app-mobile-recharge',
  standalone: true,
  imports: [DataGridComponent, DynamicFormComponent],
  templateUrl: './mobile-recharge.component.html',
  styleUrl: './mobile-recharge.component.scss'
})
export class MobileRechargeComponent {
  public transactionHistory = [
    {
      serviceName: "Money Transfer",
      type: "Debit",
      remark: "Money Transfer to Ac-123456 with ref id: 1677135895",
      amount: 100.00,
      beforeBalance: 1382.62,
      updatedBalance: 1282.62,
      retailerDetails: "Kanhaiya Kumar, Mob: 8700335031, User Id: dactilar",
      date: "2023-02-23 12:34:55"
    },
    {
      serviceName: "Money Transfer",
      type: "Debit",
      remark: "DMT Transfer Charge for Account no 123456, Ref Id: 1677135895, Service Charge 5.00, Tax 0.90, Total Service Charge 5.90",
      amount: 5.90,
      beforeBalance: 1282.62,
      updatedBalance: 1276.72,
      retailerDetails: "Kanhaiya Kumar, Mob: 8700335031, User Id: dactilar",
      date: "2023-02-23 12:34:55"
    },
    {
      serviceName: "Money Transfer",
      type: "Debit",
      remark: "Money Transfer to Ac-123456 with ref id: 1677306673",
      amount: 100.00,
      beforeBalance: 1276.72,
      updatedBalance: 1176.72,
      retailerDetails: "Kanhaiya Kumar, Mob: 8700335031, User Id: dactilar",
      date: "2023-02-25 12:01:13"
    },
    {
      serviceName: "Money Transfer",
      type: "Debit",
      remark: "Money Transfer to Ac-789101 with ref id: 1677406673",
      amount: 200.00,
      beforeBalance: 1176.72,
      updatedBalance: 976.72,
      retailerDetails: "Kanhaiya Kumar, Mob: 8700335031, User Id: dactilar",
      date: "2023-02-26 09:30:12"
    },
    {
      serviceName: "Money Transfer",
      type: "Debit",
      remark: "Money Transfer to Ac-654321 with ref id: 1677506673",
      amount: 50.00,
      beforeBalance: 976.72,
      updatedBalance: 926.72,
      retailerDetails: "Kanhaiya Kumar, Mob: 8700335031, User Id: dactilar",
      date: "2023-02-27 10:15:45"
    },
    {
      serviceName: "Money Transfer",
      type: "Debit",
      remark: "DMT Transfer Charge for Account no 654321, Ref Id: 1677506673, Service Charge 2.00, Tax 0.36, Total Service Charge 2.36",
      amount: 2.36,
      beforeBalance: 926.72,
      updatedBalance: 924.36,
      retailerDetails: "Kanhaiya Kumar, Mob: 8700335031, User Id: dactilar",
      date: "2023-02-27 10:20:30"
    },
    {
      serviceName: "Money Transfer",
      type: "Debit",
      remark: "Money Transfer to Ac-112233 with ref id: 1677606673",
      amount: 300.00,
      beforeBalance: 924.36,
      updatedBalance: 624.36,
      retailerDetails: "Kanhaiya Kumar, Mob: 8700335031, User Id: dactilar",
      date: "2023-03-01 11:40:50"
    },
    {
      serviceName: "Money Transfer",
      type: "Debit",
      remark: "DMT Transfer Charge for Account no 112233, Ref Id: 1677606673, Service Charge 10.00, Tax 1.80, Total Service Charge 11.80",
      amount: 11.80,
      beforeBalance: 624.36,
      updatedBalance: 612.56,
      retailerDetails: "Kanhaiya Kumar, Mob: 8700335031, User Id: dactilar",
      date: "2023-03-01 11:45:15"
    },
    {
      serviceName: "Money Transfer",
      type: "Debit",
      remark: "Money Transfer to Ac-445566 with ref id: 1677706673",
      amount: 150.00,
      beforeBalance: 612.56,
      updatedBalance: 462.56,
      retailerDetails: "Kanhaiya Kumar, Mob: 8700335031, User Id: dactilar",
      date: "2023-03-02 08:20:25"
    },
    {
      serviceName: "Money Transfer",
      type: "Debit",
      remark: "DMT Transfer Charge for Account no 445566, Ref Id: 1677706673, Service Charge 7.00, Tax 1.26, Total Service Charge 8.26",
      amount: 8.26,
      beforeBalance: 462.56,
      updatedBalance: 454.30,
      retailerDetails: "Kanhaiya Kumar, Mob: 8700335031, User Id: dactilar",
      date: "2023-03-02 08:25:50"
    }
  ];
  
  
   
    public tableConfig: DataTable = {
      "tableHeading": "Service Details",
      "columns": [
        {
          "name": "Service Name",
          "field": "serviceName",
          "width": "150"
        },
        {
          "name": "Type",
          "field": "type",
          "width": "150"
        },
        {
          "name": "Remark",
          "field": "remark",
          "width": "300"
        },
        {
          "name": "Amount",
          "field": "amount",
          "width": "100"
        },
        {
          "name": "Before Balance",
          "field": "beforeBalance",
          "width": "150"
        },
        {
          "name": "Updated Balance",
          "field": "updatedBalance",
          "width": "150"
        },
        {
          "name": "Retailer Details",
          "field": "retailerDetails",
          "width": "200"
        },
        {
          "name": "Date",
          "field": "date",
          "width": "200"
        }
      ],
      "config": {
        "sorting": {
          "column": "date",
          "order": "desc"
        },
        "pageSizeOptions": [5, 10],
        "pageSize": 5
      },
      "isRowClickable": false,
      "isSearchable": true
    }
    
    

    public formConfig = {
      "fields": [
        {
          "type": "date",
          "label": "Start Date",
          "placeholder": "",
          "class": "form-control",
          "id": "startDate",
          "validators": [{ isRequired:true, message: 'Start Date is required' }]
        },
        {
          "type": "date",
          "label": "End Date",
          "placeholder": "",
          "class": "form-control",
          "id": "endDate",
          "validators": [{ isRequired:true, message: 'End Date is required' }]
        },
        {
          type: 'dropdown',
          id: 'userType',
          label: 'User Type',
          options: [
            { value: 'retailer', label: 'Retailer' },
            { value: 'admin', label: 'Admin' },
            { value: 'distributor', label: 'Distributor' },
          ],
          class: 'form-control',
          "validators": [{ isRequired:true, message: 'User Type is required' }]
        },
        {
          "type": "text",
          "label": "User ID",
          "placeholder": "Enter User ID",
          "class": "form-control",
          "id": "userID",
          validators: [{ isRequired:false}]
        },
        {
          type: 'dropdown',
          id: 'rechargeStatus',
          label: 'Recharge Status',
          options: [
            { value: 'all', label: 'All' },
            { value: 'failed', label: 'Failed' },
            { value: 'success', label: 'Success' },
          ],
          class: 'form-control',
          "validators": [{ isRequired:false }]
        },
        {
          type: 'dropdown',
          id: 'operator',
          label: 'Operator',
          options: [
            { value: 'jio', label: 'Jio' },
            { value: 'airtel', label: 'Airtel' },
            { value: 'idea', label: 'Idea' },
          ],
          class: 'form-control',
          "validators": [{ isRequired:false }]
        },
     
      ]
    };

}
