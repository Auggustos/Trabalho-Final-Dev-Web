import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastrarReviewComponent } from './modal-cadastrar-review.component';

describe('ModalCadastrarReviewComponent', () => {
  let component: ModalCadastrarReviewComponent;
  let fixture: ComponentFixture<ModalCadastrarReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCadastrarReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCadastrarReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
