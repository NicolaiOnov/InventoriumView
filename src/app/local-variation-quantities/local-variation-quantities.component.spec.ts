import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalVariationQuantitiesComponent } from './local-variation-quantities.component';

describe('LocalVariationQuantitiesComponent', () => {
  let component: LocalVariationQuantitiesComponent;
  let fixture: ComponentFixture<LocalVariationQuantitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalVariationQuantitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalVariationQuantitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
