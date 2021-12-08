import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcoreSharedLibraryComponent } from './gcore-shared-library.component';

describe('GcoreSharedLibraryComponent', () => {
  let component: GcoreSharedLibraryComponent;
  let fixture: ComponentFixture<GcoreSharedLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcoreSharedLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcoreSharedLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
