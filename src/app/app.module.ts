import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { MdToHtmlPipe } from './md-to-html.pipe';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { PortfolioPageComponent } from './portfolio/portfolio-page/portfolio-page.component';
import  * as GitHubCalendar from 'node_modules/github-calendar';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    PortfolioComponent,
    AboutComponent,
    BlogComponent,
    FooterComponent,
    MdToHtmlPipe,
    BlogPageComponent,
    PortfolioPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
