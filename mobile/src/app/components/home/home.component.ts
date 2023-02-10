import { Component, OnInit } from '@angular/core';
import { AddBookComponent } from '../add-book/add-book.component';
import { BookListComponent } from '../book-list/book-list.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  clickMessage: string;
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  constructor() { }

  ngOnInit() {}

}
