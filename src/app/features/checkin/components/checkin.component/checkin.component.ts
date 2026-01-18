import {Component, inject} from '@angular/core';
import {CheckinServices} from '../../services/checking.services';

@Component({
  selector: 'app-checkin.component',
  imports: [],
  templateUrl: './checkin.component.html',
  styleUrl: './checkin.component.scss',
})
export class CheckinComponent {
  private service = inject(CheckinServices);

  checkIn(raw: string) {
    this.service.process(raw);
  }
}
