import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraJogoComponent } from './cadastra-jogo.component';

describe('CadastraJogoComponent', () => {
  let component: CadastraJogoComponent;
  let fixture: ComponentFixture<CadastraJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
