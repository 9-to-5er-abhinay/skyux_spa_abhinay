import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkyAgGridModule } from '@skyux/ag-grid';
import { SkyAvatarModule } from '@skyux/avatar';
import { SkyIdModule } from '@skyux/core';
import { SkyDatepickerModule } from '@skyux/datetime';
import { SkyCharacterCounterModule, SkyInputBoxModule } from '@skyux/forms';
import { SkyGridModule } from '@skyux/grids';
import {
  SkyAlertModule,
  SkyKeyInfoModule,
  SkyStatusIndicatorModule
} from '@skyux/indicators';
import {
  SkyFluidGridModule,
  SkyTextExpandModule,
  SkyToolbarModule
} from '@skyux/layout';
import { SkySearchModule } from '@skyux/lookup';
import { SkyModalModule } from '@skyux/modals';
import { SkyNavbarModule } from '@skyux/navbar';
import { SkyPhoneFieldModule } from '@skyux/phone-field';
import { SkyDropdownModule } from '@skyux/popovers';
import { SkyEmailValidationModule } from '@skyux/validation';
import { SkyDataEntryGridContextMenuComponent } from './components/data-entry-grid-context-menu/data-entry-grid-context-menu.component';
import { SkyDataEntryGridEditModalComponent } from './components/data-entry-grid-edit-modal/data-entry-grid-edit-modal.component';

@NgModule({
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    SkyInputBoxModule,
    SkyEmailValidationModule,
    SkyDatepickerModule,
    SkyCharacterCounterModule,
    SkyTextExpandModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    SkyIdModule,
    ReactiveFormsModule,
    SkyGridModule,
    SkyAgGridModule,
    SkyPhoneFieldModule,
    SkyStatusIndicatorModule,
    SkyDropdownModule,
    SkyModalModule,
    SkyToolbarModule,
    SkySearchModule
  ],
  entryComponents: [
    SkyDataEntryGridContextMenuComponent,
    SkyDataEntryGridEditModalComponent
  ]
})
export class AppSkyModule {}
