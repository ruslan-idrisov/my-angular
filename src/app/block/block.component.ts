import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, interval, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockComponent implements OnInit, OnChanges {

  @Input() inputData?: number;

  static counter = 0;
  renderCounter: number = 0;

  checked$: BehaviorSubject<any> = new BehaviorSubject(false);

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    
  }

  onClickBlock() {
    BlockComponent.counter++;
    this.renderCounter = BlockComponent.counter;
    // this.cdr.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    BlockComponent.counter++;
    this.renderCounter = BlockComponent.counter;
    console.log(changes, 'changes');
  }

  // ngDoCheck() {
  //   console.log('do checked');
  //   this.checked$.next(true);
    
  // }

}
