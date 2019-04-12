import { MatButtonModule, 
  MatCheckboxModule, 
  MatProgressSpinnerModule, 
  MatProgressBarModule 
} from '@angular/material';
import {MatCardModule} from '@angular/material/card'
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, MatCardModule, MatSelectModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, MatCardModule, MatSelectModule],
})
export class MaterialModule { }
