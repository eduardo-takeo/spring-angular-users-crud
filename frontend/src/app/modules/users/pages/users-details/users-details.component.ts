import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss'],
})
export class UsersDetailsComponent {
  userForm: FormGroup;
  title: string;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.userForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.title =
      this.activatedRoute.snapshot.params['id'] === 'new'
        ? 'Edit User'
        : 'New User';
  }

  onSubmit() {
    console.log('Form Submitted!', this.userForm);
  }
}
