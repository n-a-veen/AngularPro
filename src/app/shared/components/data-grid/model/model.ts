// Action Buttons
export interface ActionButton {
    text?: string;
    title?: string;
    type: string;
    icon?: string;
    color?: 'primary' | 'accent' | 'warn';
    action?: [];
  }
  
  export interface DataTable {
    tableHeading: string;
    tableRouteLink?: string;
    columns: ColumnDef[];
    dataSet?: any;
    config?: AdditionalConfig;
    handlers?: ActionButton[];
    edit?: boolean;
    isRowClickable?: boolean;
    isSearchable?: boolean;
    isAnyColumnEditable?: boolean;
    pagination?: Pagination;
    isVerticalRow?: boolean;
    messageTitles?: {
      status1?: string;
      status2?: string;
    };
  }
  
  export interface ColumnDef {
    name: string;
    field?: string;
    type?:
      | 'input'
      | 'select'
      | 'custom'
      | 'handler'
      | 'link'
      | 'dialog'
      | 'date'
      | 'dateTime'
      | 'time'
      | 'expend'
      | 'editable'
      | 'percent'
      | 'currency'
      | 'number'
      | 'checkbox'
      | 'button';
    editable?: boolean;
    colStyle?: any;
    sticky?: boolean;
    hide?: boolean;
    pipe?: 'number' | 'currency';
    options?: TableSelectOptions[];
    optionValueField?: string;
    width?: string;
  }
  export interface TableSelectOptions {
    title: string;
    value: any;
    displayField?: string;
  }
  
  export interface TableRowUpdateEvent {
    data?: any;
    index?: number;
  }
  
  export interface TableRowClickEvent extends TableRowUpdateEvent {}
  
  interface AdditionalConfig {
    pageSizeOptions?: number[];
    sorting?: { column: any; order: string };
    stickyLeft?: string;
    paginate?: boolean;
    color?: boolean;
    pageSize?: number;
  }
  export class Pagination {
    page: number = 1;
    pageSize: number = 20;
    totalRecords: number = 0;
  }
  