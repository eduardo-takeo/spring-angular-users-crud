import { NgModule } from '@angular/core';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [TableComponent, HeaderComponent],
  imports: [],
  exports: [TableComponent, HeaderComponent],
})
export class SharedModule {}
