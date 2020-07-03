import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { COMPONENTS_DECLARATIONS, UI_MODULES } from './components';


@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS_DECLARATIONS,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    UI_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
