import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MovieComponent } from './movie/movie.component';
import { FilterComponent } from './filter/filter.component';
import { BudgetComponent } from './budget/budget.component';
//services
import { MoviesService } from './movies.service'
import { UsersService } from './users.service'

import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMoviesComponent,
    AllMoviesComponent,
    MovieComponent,
    FilterComponent,
    BudgetComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    AngularFontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [MoviesService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
