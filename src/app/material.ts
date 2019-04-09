import { MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule],
})
export class MaterialModule { }
