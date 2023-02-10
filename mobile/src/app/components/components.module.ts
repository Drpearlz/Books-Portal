import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookListComponent } from './book-list/book-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AddBookComponent, BookItemComponent, BookListComponent, HomeComponent],
  imports: [
    CommonModule, IonicModule, ReactiveFormsModule ],
  exports: [AddBookComponent, BookItemComponent, BookListComponent, HomeComponent]
})
export class ComponentsModule { }
