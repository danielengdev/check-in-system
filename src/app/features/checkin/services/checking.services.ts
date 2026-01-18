import {inject, Injectable} from '@angular/core';
import {ParticipantStore} from '../../store/participant.store';
import {CheckinPayloadModel} from '../models/checkin-payload.model';

@Injectable({
  providedIn: 'root',
})
export class CheckinServices {
  private store = inject(ParticipantStore);

  process(raw: string) {
    const payload = JSON.parse(raw) as CheckinPayloadModel;
    this.store.checkIn(payload.participantId);
  }
}
