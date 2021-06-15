import { ChangeDetectionStrategy, Component, Input, OnInit, } from '@angular/core';
import { select, Store } from '@ngrx/store';
// import { addActionRange, addActionText, getData } from 'src/app/store/test.actions';
// import { AppWithState, selectFeature, selectStoreRange, selectStoreText, selectStoreTextReversed } from '../../../../store/test.selectors';
import { addActionRange, addActionText, getData } from '../../store/test.actions';
import { AppWithState, selectFeature, selectStoreRange, selectStoreText, selectStoreTextReversed } from '../../store/test.selectors';

@Component({
  selector: 'app-input-block',
  templateUrl: './input-block.component.html',
  styleUrls: ['./input-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputBlockComponent implements OnInit {
  @Input() inputData?: number;

  titleValue: string = '';
  messageValue: string = '';
  rangeValue = 1;
  range$ = this.store$.pipe(select(selectStoreRange));

  constructor(private store$: Store<AppWithState>) {}
  
  ngOnInit(): void {
    this.range$.subscribe((value: any) => {
      this.rangeValue = value;
    })
  }

  onClickButton() {
    const text = {
      title: this.titleValue,
      body: this.messageValue
    }
    this.titleValue = '';
    this.messageValue = '';

    this.store$.dispatch(addActionText({text: text}));
  }

  onClickServerButton() {
    this.store$.dispatch(getData());
  }

  onClickReleaseButton() {
    console.log('released');
    
    selectFeature.release()
  }


  updateChanges() {
    this.store$.dispatch(addActionRange({range: this.rangeValue}))
  }
}
