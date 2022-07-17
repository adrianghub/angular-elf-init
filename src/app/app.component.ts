import { Component } from '@angular/core';
import { GoogleBooksService } from './services/google-books.service';
import { BooksRepository } from './books/store/books.repository';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private booksService: GoogleBooksService,
    public repo: BooksRepository
  ) {}

  ngOnInit() {
    this.booksService.getBooks().subscribe();
  }
}
