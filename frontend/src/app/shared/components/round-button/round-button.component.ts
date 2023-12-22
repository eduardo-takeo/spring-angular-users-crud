import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss'],
})
export class RoundButtonComponent {
  @Input() onClick: () => void;

  constructor(private router: Router) {}
}
