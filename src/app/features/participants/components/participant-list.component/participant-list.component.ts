import { Component, inject } from '@angular/core';
import {ParticipantStore} from '../../../store/participant.store';
import {
  ParticipantQrCodeComponent
} from '../../../../shared/components/qr-code/participant-qrcode.component/participant-qrcode.component';

@Component({
  selector: 'app-participant-list.component',
  imports: [
    ParticipantQrCodeComponent
  ],
  templateUrl: './participant-list.component.html',
  styleUrl: './participant-list.component.scss',
})
export class ParticipantListComponent {
  store = inject(ParticipantStore);

  add() {
    this.store.add({
      id: crypto.randomUUID(),
      name: 'Novo Participante',
      email: 'email@email.com',
      checkedIn: false
    });
  }
}
