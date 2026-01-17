import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantQrcodeComponent } from './participant-qrcode.component';

describe('ParticipantQrcodeComponent', () => {
  let component: ParticipantQrcodeComponent;
  let fixture: ComponentFixture<ParticipantQrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipantQrcodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantQrcodeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
