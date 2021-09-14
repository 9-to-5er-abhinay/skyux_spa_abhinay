import { Component, Input, OnInit } from '@angular/core';
import { SkyAgGridService, SkyCellType } from '@skyux/ag-grid';
import { SkyModalCloseArgs, SkyModalService } from '@skyux/modals';
import { GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { Item } from '../../Item';
import { SkyDataEntryGridContextMenuComponent } from '../data-entry-grid-context-menu/data-entry-grid-context-menu.component';
import { SkyDataEntryGridEditModalContext } from '../data-entry-grid-edit-modal/data-entry-grid-edit-modal-context';
import { SkyDataEntryGridEditModalComponent } from '../data-entry-grid-edit-modal/data-entry-grid-edit-modal.component';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
  @Input() public gridData: Item[];

  public gridApi: GridApi;
  public gridOptions: GridOptions;
  public searchText: string;
  public columnDefs = [
    {
      field: 'selected',
      type: SkyCellType.RowSelector
    },
    {
      colId: 'context',
      headerName: '',
      maxWidth: 50,
      sortable: false,
      cellRendererFramework: SkyDataEntryGridContextMenuComponent
    },
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
      maxWidth: 140,
      minWidth: 135,
      type: SkyCellType.Number
    },
    {
      field: 'email',
      headerName: 'Email',
      type: SkyCellType.Text
    },
    {
      field: 'date',
      headerName: 'DOB',
      maxWidth: 110,
      type: SkyCellType.Date
      // valueFormatter: this.endDateFormatter
    },
    {
      field: 'address',
      headerName: 'Address',
      type: SkyCellType.Text
    }
  ];
  constructor(
    private agGridService: SkyAgGridService,
    private modalService: SkyModalService
  ) {}

  public ngOnInit(): void {
    this.gridOptions = {
      columnDefs: this.columnDefs,
      onGridReady: (gridReadyEvent) => this.onGridReady(gridReadyEvent)
    };
    this.gridOptions = this.agGridService.getGridOptions({
      gridOptions: this.gridOptions
    });
  }
  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.gridApi = gridReadyEvent.api;

    this.gridApi.sizeColumnsToFit();
  }

  public openModal(): void {
    const context = new SkyDataEntryGridEditModalContext();
    context.gridData = this.gridData;

    const options = {
      providers: [
        { provide: SkyDataEntryGridEditModalContext, useValue: context }
      ],
      ariaDescribedBy: 'docs-edit-grid-modal-content',
      size: 'large'
    };

    const modalInstance = this.modalService.open(
      SkyDataEntryGridEditModalComponent,
      options
    );

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      if (result.reason === 'cancel' || result.reason === 'close') {
        alert('Edits canceled!');
      } else {
        this.gridData = result.data;
        this.gridApi.refreshCells();
        alert('Saving data!');
      }
    });
  }

  public searchApplied(searchText: string): void {
    this.searchText = searchText;
    this.gridApi.setQuickFilter(searchText);
  }

  // private endDateFormatter(params: ValueFormatterParams): string {
  //   const dateConfig = { year: 'numeric', month: '2-digit', day: '2-digit' };
  //   return params.value ? params.value.toLocaleDateString('en-us', dateConfig) : 'N/A';
  // }
}
