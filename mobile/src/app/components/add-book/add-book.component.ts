import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from 'src/app/book';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/books.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  constructor(private router: Router, private service: BooksService) { }
  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('',[Validators.required]),
    publish_date: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    abstract: new FormControl('', [Validators.required])
  });

  get title() {
    return this.form.get('title');
  }

  get author() {
    return this.form.get('author');
  }

  get publish_date() {
    return this.form.get('publish_date');
  }
  get image() {
    return this.form.get('image');
  }
  get category() {
    return this.form.get('category');
  }
  get contact() {
    return this.form.get('contact');
  }
  get phone() {
    return this.form.get('phone');
  }
  get email() {
    return this.form.get('email');
  }
  get abstract() {
    return this.form.get('abstract');
  }
  
  add_book() {
    let x = <Book>this.form.value;
    
    this.service.addBook(x).subscribe((msg)=>{console.log(msg)}, 
    (err: HttpErrorResponse)=>{
      console.log(err);
    });
    this.form.reset();
    this.router.navigate(['home']);
  }



  ngOnInit() {}

}
