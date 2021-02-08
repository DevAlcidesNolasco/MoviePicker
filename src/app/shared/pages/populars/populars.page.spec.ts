import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopularsPage } from './populars.page';

describe('PopularsPage', () => {
  let component: PopularsPage;
  let fixture: ComponentFixture<PopularsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopularsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
