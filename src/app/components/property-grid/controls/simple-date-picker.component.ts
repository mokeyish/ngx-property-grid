import {Component, EventEmitter} from '@angular/core';
import {ICustomDynamicComponent} from '../custom.component';

@Component({
    selector: 'simple-date-component',
    template: '<input type="date" [value]="value" (change)="valueChange.emit($event.target.value)"/>',
})
export class SimpleDateComponent implements ICustomDynamicComponent<string> {
    value: string;
    valueChange: EventEmitter<string> = new EventEmitter<string>();
}
