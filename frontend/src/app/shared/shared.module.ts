import { NgModule } from '@angular/core';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TableComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [TableComponent, HeaderComponent],
})
export class SharedModule {}
