import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  @Input() book;
  constructor(private router: Router, private booksService: BooksService) { }  

  ngOnInit() {}

}
