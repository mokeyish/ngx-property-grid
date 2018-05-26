import {Component, EventEmitter} from '@angular/core';
import {ICustomDynamicComponent} from '../custom.component';

@Component({
    selector: 'simple-text-component',
    template: '<input type="text" [value]="value" (change)="valueChange.emit($event.target.value)"/>',
})
export class SimpleTextComponent implements ICustomDynamicComponent<string> {
    value: string;
    valueChange: EventEmitter<string> = new EventEmitter<string>();
}
