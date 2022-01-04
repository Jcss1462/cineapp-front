import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisMetodosComponent } from './mis-metodos.component';

describe('MisMetodosComponent', () => {
  let component: MisMetodosComponent;
  let fixture: ComponentFixture<MisMetodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisMetodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisMetodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
