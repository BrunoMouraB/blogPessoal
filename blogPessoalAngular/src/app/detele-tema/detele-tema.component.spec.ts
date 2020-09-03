import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeteleTemaComponent } from './detele-tema.component';

describe('DeteleTemaComponent', () => {
  let component: DeteleTemaComponent;
  let fixture: ComponentFixture<DeteleTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeteleTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeteleTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
