import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuotesComponent } from './get-quotes.component';

describe('GetQuotesComponent', () => {
  let component: GetQuotesComponent;
  let fixture: ComponentFixture<GetQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetQuotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
