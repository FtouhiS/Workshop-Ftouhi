import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductRFComponentComponent } from './add-product-rfcomponent.component';

describe('AddProductRFComponentComponent', () => {
  let component: AddProductRFComponentComponent;
  let fixture: ComponentFixture<AddProductRFComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductRFComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductRFComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
