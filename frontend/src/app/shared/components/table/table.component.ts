import { Component, Input } from '@angular/core';
import { ITableColumn } from '../../models/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() columns: ITableColumn[];
  @Input() data: any[];

  constructor() {}

  ngOnInit(): void {}
}
