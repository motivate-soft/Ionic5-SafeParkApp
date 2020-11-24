import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceManagePage } from './device-manage.page';

describe('DeviceManagePage', () => {
  let component: DeviceManagePage;
  let fixture: ComponentFixture<DeviceManagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceManagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceManagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
