import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoLandingHeaderComponent } from './ico-landing-header.component';

describe('IcoLandingHeaderComponent', () => {
  let component: IcoLandingHeaderComponent;
  let fixture: ComponentFixture<IcoLandingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcoLandingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcoLandingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
