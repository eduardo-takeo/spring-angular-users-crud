import { Component } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/users.service';
import { IUser } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((data: IUser[]) => {
      console.log(data);
    });
  }
}
