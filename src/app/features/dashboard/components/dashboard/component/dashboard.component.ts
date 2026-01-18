import {Component, inject} from '@angular/core';
import {ParticipantStore} from '../../../../store/participant.store';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  store = inject(ParticipantStore);
}
