import {Component, Input, OnChanges, signal} from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-participant-qrcode',
  templateUrl: 'participant-qrcode.component.html',
})
export class ParticipantQrCodeComponent implements OnChanges {

  @Input({ required: true }) value!: string;

  qrCodeUrl = signal<string | null>(null);

  async ngOnChanges() {
    if (!this.value) return;

    const payload = JSON.stringify({
      participantId: this.value,
      generatedAt: Date.now()
    });

    const url = await QRCode.toDataURL(payload, {
      width: 300,
      margin: 2,
      errorCorrectionLevel: 'M'
    });

    this.qrCodeUrl.set(url);
  }
}
