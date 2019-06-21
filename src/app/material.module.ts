import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule
} from '@angular/material';

import { MatIconModule } from '@angular/material/icon'

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule
  ],
})

export class MaterialModule { }
