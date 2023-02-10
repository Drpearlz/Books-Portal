import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
@Input() book;
  constructor( private service: BookService, private router: Router) { }

  change_book(f, id) {
    this.service.changeBook(f.value, id ).subscribe((result:{success})=>{ 
      
      if (result.success == true){this.router.navigate(['home']);}
      else { console.log('please enter a valid email')}
      });
  }

  ngOnInit() {
  }

}
