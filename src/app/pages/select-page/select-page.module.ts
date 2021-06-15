import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import * as fromPromoPage from './store/test.reducer';

import {
  InputBlockComponent,
  OutputBlockComponent,
  SelectInputOutputComponent
} from './components';
import { StoreModule } from '@ngrx/store';
import { storeFeatureKey } from './store/test.selectors';
import { EffectsModule } from '@ngrx/effects';
import { TestEffects } from './store/test.effects';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forFeature(storeFeatureKey, fromPromoPage.reducer),
    EffectsModule.forFeature([TestEffects]),
  ],
  declarations: [
    InputBlockComponent,
    OutputBlockComponent,
    SelectInputOutputComponent,
  ],
})
export class SelectPageModule {}
