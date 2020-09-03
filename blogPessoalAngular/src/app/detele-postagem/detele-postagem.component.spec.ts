import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetelePostagemComponent } from './detele-postagem.component';

describe('DetelePostagemComponent', () => {
  let component: DetelePostagemComponent;
  let fixture: ComponentFixture<DetelePostagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetelePostagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetelePostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
