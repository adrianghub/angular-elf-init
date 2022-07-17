import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { Book, BooksRepository } from '../books/store/books.repository';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  constructor(private http: HttpClient, private repo: BooksRepository) {}

  getBooks(): Observable<{ items: Book[] }> {
    return this.http
      .get<{ items: Book[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=25&orderBy=relevance&q=elf'
      )
      .pipe(
        tap((books) => {
          this.repo.setBooks(books.items || []);
        })
      );
  }
}