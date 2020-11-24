import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArmPagePage } from './arm-page.page';

describe('ArmPagePage', () => {
  let component: ArmPagePage;
  let fixture: ComponentFixture<ArmPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArmPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
