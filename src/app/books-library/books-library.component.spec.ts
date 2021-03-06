import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksLibraryComponent } from './books-library.component';

describe('BooksLibraryComponent', () => {
  let component: BooksLibraryComponent;
  let fixture: ComponentFixture<BooksLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
