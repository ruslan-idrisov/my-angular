import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JumperWrapperComponent } from './pages/jumper-page/components/jumper-wrapper/jumper-wrapper.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PongGameWrapperComponent } from './pages/pong-page/components/pong-game-wrapper/pong-game-wrapper.component';
import { SelectInputOutputComponent } from './pages/select-page/components';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'select',
    component: SelectInputOutputComponent
  },
  {
    path: 'pong',
    component: PongGameWrapperComponent
  },
  {
    path: 'jumper',
    component: JumperWrapperComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
