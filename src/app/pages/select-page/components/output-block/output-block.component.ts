import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppWithState, selectStoreRange, selectStoreTextReversed, selectStoreLoading, selectStoreText } from '../../store/test.selectors';

@Component({
  selector: 'app-output-block',
  templateUrl: './output-block.component.html',
  styleUrls: ['./output-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutputBlockComponent implements OnInit {
  range$ = this.store$.pipe(select(selectStoreRange));
  loading$ = this.store$.pipe(select(selectStoreLoading));
  textReversed$ = this.store$.pipe(select(selectStoreTextReversed));
  
  constructor(private store$: Store<AppWithState>) {}

  ngOnInit(): void {
  }
}
