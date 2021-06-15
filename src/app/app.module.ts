import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as fromTestReducer from '../app/pages/select-page/store/test.reducer';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { TestEffects } from '../app/pages/select-input-output/store//test.effects';
import { EffectsModule } from '@ngrx/effects';
// import { SelectInputOutputComponent } from './pages/select-input-output/select-input-output.component';
// import { InputBlockComponent } from './pages/select-input-output/components/input-block/inputBlock.component';
// import { OutputBlockComponent } from './pages/select-input-output/output-block/outputBlock.component';
// import { OutputBlockComponent } from './pages/select-input-output/components/output-block/output-block.component';
// import { InputBlockComponent } from './pages/select-page/components/input-block/input-block.component';
import { TestService } from './pages/select-page/shared/service';
import { TestEffects } from './pages/select-page/store/test.effects';
import { SelectPageModule } from './pages/select-page/select-page.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PongPageModule } from './pages/pong-page/pong-page.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
  ],
  imports: [
    PongPageModule,
    SelectPageModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    StoreModule.forRoot({test: fromTestReducer.reducer}),
    EffectsModule.forRoot([TestEffects]),
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
