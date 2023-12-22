import { Component, Input } from '@angular/core';
import { ITableColumn } from '../../models/table.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() columns: ITableColumn[];
  @Input() data: any[];
  @Input() onRowClick: (selectedItem: any) => void;

  constructor(private router: Router) {}
}
