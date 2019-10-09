import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    ProjectsListComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
