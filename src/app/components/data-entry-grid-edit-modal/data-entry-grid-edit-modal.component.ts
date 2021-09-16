import { Component, OnInit } from '@angular/core';
import {
  SkyAgGridService,
  SkyCellType,
  SkyDatepickerProperties
} from '@skyux/ag-grid';
import { SkyModalInstance } from '@skyux/modals';
import {
  ColDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
  ICellEditorParams
} from 'ag-grid-community';
import { Item } from '../../Item';
import { SkyDataEntryGridEditModalContext } from './data-entry-grid-edit-modal-context';

@Component({
  selector: 'sky-demo-edit-modal-form',
  templateUrl: './data-entry-grid-edit-modal.component.html'
})
export class SkyDataEntryGridEditModalComponent implements OnInit {
  public columnDefs: ColDef[];
  public gridApi: GridApi;
  public gridData: Item[];
  public gridOptions: GridOptions;

  constructor(
    private agGridService: SkyAgGridService,
    public context: SkyDataEntryGridEditModalContext,
    public instance: SkyModalInstance
  ) {}

  public ngOnInit(): void {
    this.gridData = this.context.gridData;
    this.columnDefs = [
      {
        field: 'firstName',
        headerName: 'First Name',
        type: SkyCellType.Text
      },
      {
        field: 'lastName',
        headerName: 'Last Name',
        type: SkyCellType.Text
      },
      {
        field: 'contact',
        headerName: 'Contact No.',
        type: SkyCellType.Number,
        editable: true
      },
      {
        field: 'email',
        headerName: 'Email',
        type: SkyCellType.Text
      },
      {
        field: 'date',
        headerName: 'DOB',
        type: SkyCellType.Date,
        editable: true,
        cellEditorParams: (
          params: ICellEditorParams
        ): { skyComponentProperties: SkyDatepickerProperties } => {
          return { skyComponentProperties: { minDate: params.data.startDate } };
        }
      },
      {
        field: 'address',
        headerName: 'Address',
        type: SkyCellType.Text,
        editable: true
      }
    ];

    this.gridOptions = {
      columnDefs: this.columnDefs,
      onGridReady: (gridReadyEvent) => this.onGridReady(gridReadyEvent)
    };
    this.gridOptions = this.agGridService.getEditableGridOptions({
      gridOptions: this.gridOptions
    });
  }

  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.gridApi = gridReadyEvent.api;

    this.gridApi.sizeColumnsToFit();
  }
}
