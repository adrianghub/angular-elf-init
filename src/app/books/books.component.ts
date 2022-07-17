import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './store/books.repository';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  @Input() books: Book[] | null = [];
  @Output() addToLibrary = new EventEmitter();
}
