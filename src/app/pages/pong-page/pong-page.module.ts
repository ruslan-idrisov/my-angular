import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PongGameComponent, PongGameWrapperComponent } from './components';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { storeFeatureKey } from './store/pong.selectors';
import * as fromPongReducerPage from './store/pong.reducer';


@NgModule({
  declarations: [
    PongGameComponent,
    PongGameWrapperComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forFeature(storeFeatureKey, fromPongReducerPage.reducer),
    // EffectsModule.forFeature([PongEffects]),
  ]
})
export class PongPageModule { }
