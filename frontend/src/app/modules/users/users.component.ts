import { Component } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/users.service';
import { IUser } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  columns: string[] = ['id', 'name', 'email'];
  data: any[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'blulbublublbulb',
    },
    {
      id: 2,
      name: 'Leanne Graham',
      email: 'blablablabla',
    },
  ];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((data: IUser[]) => {
      console.log(data);
    });
  }
}
