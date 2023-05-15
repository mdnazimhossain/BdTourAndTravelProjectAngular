import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagListComponent } from './packag-list.component';

describe('PackagListComponent', () => {
  let component: PackagListComponent;
  let fixture: ComponentFixture<PackagListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
