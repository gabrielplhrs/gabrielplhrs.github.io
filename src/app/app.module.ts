import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './pagina-inicial/header/header.component';
import { ProfileComponent } from './pagina-inicial/profile/profile.component';
import { AboutComponent } from './pagina-inicial/about/about.component';
import { SkillsComponent } from './pagina-inicial/skills/skills.component';
import { WorkComponent } from './pagina-inicial/work/work.component';
import { BlogComponent } from './pagina-inicial/blog/blog.component';
import { ContactComponent } from './pagina-inicial/contact/contact.component';
import { FooterComponent } from './pagina-inicial/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    AboutComponent,
    SkillsComponent,
    WorkComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
