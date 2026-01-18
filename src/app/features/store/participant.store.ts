import { Injectable, signal, computed } from '@angular/core';
import {ParticipantModel} from '../participants/model/participant.model';

@Injectable({ providedIn: 'root' })
export class ParticipantStore {

  private readonly _participants = signal<ParticipantModel[]>([]);

  readonly participants = computed(() => this._participants());
  readonly checkedInCount = computed(
    () => this._participants().filter(p => p.checkedIn).length
  );

  add(participant: ParticipantModel) {
    this._participants.update(list => [...list, participant]);
  }

  checkIn(id: string) {
    this._participants.update(list =>
      list.map(p =>
        p.id === id ? { ...p, checkedIn: true } : p
      )
    );
  }
}
