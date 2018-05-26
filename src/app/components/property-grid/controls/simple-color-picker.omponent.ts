import {Component, EventEmitter} from '@angular/core';
import {ICustomDynamicComponent} from '../custom.component';

@Component({
    selector: 'simple-color-component',
    template: '<input type="color" [value]="value" (change)="valueChange.emit($event.target.value)"/>',
})
export class SimpleColorComponent implements ICustomDynamicComponent<string> {
    value: string;
    valueChange: EventEmitter<string> = new EventEmitter<string>();
}
