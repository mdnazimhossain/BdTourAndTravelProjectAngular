import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagDetailsComponent } from './packag-details.component';

describe('PackagDetailsComponent', () => {
  let component: PackagDetailsComponent;
  let fixture: ComponentFixture<PackagDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
