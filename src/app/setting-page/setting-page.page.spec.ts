import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingPagePage } from './setting-page.page';

describe('SettingPagePage', () => {
  let component: SettingPagePage;
  let fixture: ComponentFixture<SettingPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
