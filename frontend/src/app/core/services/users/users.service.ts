import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/user.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(environment.apiUsers);
  }

  createUser(newUser: IUser): Observable<IUser> {
    return this.http.post<IUser>(environment.apiUsers, newUser);
  }

  updateUser(id: number, user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${environment.apiUsers}/${id}`, user);
  }

  deleteUser(id: number): void {
    this.http.delete(`${environment.apiUsers}/${id}`);
  }
}
