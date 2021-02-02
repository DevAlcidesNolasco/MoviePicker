import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsMediaPage } from './details-media.page';

describe('DetailsMediaPage', () => {
  let component: DetailsMediaPage;
  let fixture: ComponentFixture<DetailsMediaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsMediaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsMediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
