import { EventEmitter, Input, OnChanges, Output, ViewChild,Component } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, Sort } from '@angular/material/sort';
import { MaterialModuleModule } from '../../../material-module/material-module.module';

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [MaterialModuleModule],
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.scss'
})

export class DataGridComponent implements OnChanges {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sorting!: MatSort;

  @Input() tableDataSet: any[] = [];
  @Input() tableConfig: any;
  @Input() formName: string ='';
  @Input() tableWidth!: number;

  @Output() paginationEvent: EventEmitter<PageEvent> =
    new EventEmitter<PageEvent>();
  @Output() rowUpdated: EventEmitter<any> =
    new EventEmitter<any>();
  @Output() rowClicked: EventEmitter<any> =
    new EventEmitter<any>();
  @Output() linkClicked: EventEmitter<any> =
    new EventEmitter<any>();
  @Output() selectedRows: EventEmitter<any> =
    new EventEmitter<any>();
  @Output() editData: EventEmitter<any> =
    new EventEmitter<any>();
  @Output() deleteData: EventEmitter<any> =
    new EventEmitter<any>();

  public dataSet!: MatTableDataSource<any[]>;
  public columns: any[] = [];
  public flatColumns: string[] = [];
  // public dateFormat: string = DateFormat;
  // public timeFormat: string = TimeFormat;
  // public dateTimeFormat: string = DateTimeFormat;
  public selection = new SelectionModel<any[]>(true, []);
  public clickedRows = new Set<any>();
  private isClickedOnLink: boolean = false;
  private isCheckedAll: boolean = false;
  public isCheckboxClicked: boolean = false;

  constructor() {}
  // apply filter on key press
  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSet.filter = filterValue.trim().toLowerCase();
  }

  // Check All checkbox functionality
  public isAllSelected(checked: boolean) {
    this.isCheckboxClicked = false;
    this.isCheckedAll = checked;
    if (this.isCheckedAll) {
      this.dataSet.data.forEach((row: any) => {
        if (row.status == 0) {
          this.selection.select(row);
        }
      });
    } else {
      this.selection.deselect(...this.dataSet.data);
    }
    this.selectedRows.emit({ data: this.selection.selected });
  }

  // Single select checkbox functionality
  public someChecked(row: any, checked: boolean) {
    this.isCheckboxClicked = false;
    if (checked) this.selection.select(row);
    else this.selection.deselect(row);
    this.selectedRows.emit({ data: this.selection.selected });
  }

  // Update table on every change in parent component.
  ngOnChanges(changes: any) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (this.tableConfig && Boolean(changes.tableConfig)) {
      this.renderTable(changes.tableConfig.currentValue);
    }
  }

  // Process table configuration.
  private renderTable(tableObj: { columns: any[]; handlers: any }) {
    this.columns = tableObj.columns;
    if (Boolean(tableObj.handlers)) {
      tableObj.columns.push({ name: 'Action' , width:'100'});
    }
    this.flatColumns = this.columns.map((item) => item.name);
    this.dataSet = new MatTableDataSource<any>(this.tableDataSet);
    setTimeout(() => {
      this.dataSet.paginator = this.paginator;
      this.dataSet.sort = this.sorting;
    });
  }

  // on changes of dropdown selection or input
  public triggerUpdateRowEvent(data: any, index: number, event: any): void {
    this.rowUpdated.emit({ data, index });
    event.stopPropagation();
  }

  // on click of td
  public triggerRowClickEvent(data: any, index: number): void {
    this.isCheckboxClicked = true;
    this.clickedRows = new Set<any>();
    if (!this.isClickedOnLink) this.rowClicked.emit({ data, index });
    else this.isClickedOnLink = false;
  }

  // on click on link
  public clickedOnLinked(data: any, index: number): void {
    this.isClickedOnLink = true;
    this.linkClicked.emit({ data, index });
  }
  /** Announce the change in sort state for assistive technology. */
  public announceSortChange(sortState: Sort) {
    let key: any = '';
    //eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (this.tableConfig && this.tableConfig.columns.length > 0) {
      this.tableConfig.columns.forEach((column:any) => {
        if (column.name === sortState.active) key = column.field;
      });
    }
    if (sortState.direction === 'asc') {
      this.tableDataSet.sort((row1, row2) => (row1[key] > row2[key] ? 1 : -1));
    } else {
      this.tableDataSet.sort((row1, row2) => (row1[key] < row2[key] ? 1 : -1));
    }
  }

  // on click on dialog
  public edit(event: any) {
    this.editData.emit(event);
  }

  public delete(event: any) {
    this.deleteData.emit(event);
  }
}


