import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersComponent } from './users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersDetailsComponent } from './pages/users-details/users-details.component';

@NgModule({
  declarations: [UsersComponent, UsersDetailsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class UsersModule {}
