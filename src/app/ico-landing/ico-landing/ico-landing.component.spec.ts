import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoLandingComponent } from './ico-landing.component';

describe('IcoLandingComponent', () => {
  let component: IcoLandingComponent;
  let fixture: ComponentFixture<IcoLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcoLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcoLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
