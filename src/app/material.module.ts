import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatDividerModule,
  MatBadgeModule,
  MatTooltipModule
} from '@angular/material';

import { MatIconModule } from '@angular/material/icon'

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatDividerModule,
    MatBadgeModule,
    MatTooltipModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatDividerModule,
    MatBadgeModule,
    MatTooltipModule
  ],
})

export class MaterialModule { }
