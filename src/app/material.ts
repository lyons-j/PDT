import { MatButtonModule, MatCheckboxModule, MatCardModule,MatProgressSpinnerModule } from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule],
})
export class MaterialModule { }