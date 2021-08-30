import {
  CommonModule
} from '@angular/common';

import {
  SkyIdModule
} from '@skyux/core';

import {
  NgModule
} from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyAlertModule,
  SkyKeyInfoModule
} from '@skyux/indicators';

import {
  SkyFluidGridModule,
  SkyTextExpandModule
} from '@skyux/layout';

import {
  SkyNavbarModule
} from '@skyux/navbar';

import {
  SkyInputBoxModule,
  SkyCharacterCounterModule
} from '@skyux/forms';

import {
  SkyEmailValidationModule
} from '@skyux/validation';

import {
  SkyDatepickerModule
} from '@skyux/datetime';
import {
  SkyGridModule
} from '@skyux/grids';
import {
  SkyAgGridModule
} from '@skyux/ag-grid';

import {
SkyPhoneFieldModule
} from '@skyux/phone-field';

import {
  SkyStatusIndicatorModule
  } from '@skyux/indicators';
import {
    SkyDropdownModule
} from '@skyux/popovers';
import {
  SkyDataEntryGridContextMenuComponent
} from './components/data-entry-grid-context-menu/data-entry-grid-context-menu.component';
import {
  SkyDataEntryGridEditModalComponent
} from './components/data-entry-grid-edit-modal/data-entry-grid-edit-modal.component';

import {
  SkyModalModule
} from '@skyux/modals';
import {
  SkyToolbarModule
} from '@skyux/layout';
import {
  SkySearchModule
} from '@skyux/lookup';



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
    SkyAgGridModule ,
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
export class AppSkyModule { }
