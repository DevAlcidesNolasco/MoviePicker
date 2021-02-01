import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MediaCardComponent } from './media-card.component';

describe('MediaCardComponent', () => {
  let component: MediaCardComponent;
  let fixture: ComponentFixture<MediaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MediaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
