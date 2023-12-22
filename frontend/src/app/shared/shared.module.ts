import { NgModule } from '@angular/core';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { RoundButtonComponent } from './components/round-button/round-button.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TableComponent, HeaderComponent, RoundButtonComponent],
  imports: [CommonModule, RouterModule, MatIconModule],
  exports: [TableComponent, HeaderComponent, RoundButtonComponent],
})
export class SharedModule {}
