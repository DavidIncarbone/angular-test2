import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contatto } from './contatto';

describe('Contatto', () => {
  let component: Contatto;
  let fixture: ComponentFixture<Contatto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contatto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contatto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
