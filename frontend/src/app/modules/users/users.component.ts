import { Component } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/users.service';
import { ITableColumn } from 'src/app/shared/models/table.model';
import { IUser } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  columns: ITableColumn[] = [
    {
      label: 'ID',
      key: 'id',
    },
    {
      label: 'Usuário',
      key: 'username',
    },
    {
      label: 'Grupo',
      key: 'role',
    },
  ];
  users: IUser[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((data: IUser[]) => {
      this.users = data;
    });
  }

  editUser() {
    console.log('Edit user clicked');
  }

  createUser() {
    console.log("Create user clicked")
  }
}
