import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { InputBlockComponent } from './inputBlock/inputBlock.component';
import { OutputBlockComponent } from './outputBlock/outputBlock.component';
import * as fromReducer from './store/test.reducer';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TestEffects } from './store/test.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    InputBlockComponent,
    OutputBlockComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({test: fromReducer.reducer}),
    EffectsModule.forRoot([TestEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
