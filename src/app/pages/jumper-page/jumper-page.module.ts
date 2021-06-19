import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumperComponent, JumperWrapperComponent } from './components';

@NgModule({
  declarations: [JumperWrapperComponent, JumperComponent],
  imports: [
    CommonModule
  ]
})
export class JumperPageModule { }
