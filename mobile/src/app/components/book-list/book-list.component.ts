import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[];
  constructor( private service: BooksService) {
    console.log('hello')
    this.service.getBooks().subscribe(books=>{
      console.log(books)
      this.books = books;});
   }
  ngOnInit() {}

}
