import { MatButtonModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatTableModule
} from '@angular/material';

import {MatCardModule} from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, MatCardModule, MatSelectModule,MatTableModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, MatCardModule, MatSelectModule,MatTableModule],
})
export class MaterialModule { }
