import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../books/store/books.repository';

@Component({
  selector: 'app-books-library',
  templateUrl: './books-library.component.html',
  styleUrls: ['./books-library.component.css'],
})
export class BooksLibraryComponent {
  @Input() books: Book[] | null = [];
  @Output() remove = new EventEmitter();
}
