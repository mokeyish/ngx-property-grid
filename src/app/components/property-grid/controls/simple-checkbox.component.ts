import {Component, EventEmitter} from '@angular/core';
import {ICustomDynamicComponent} from '../custom.component';

@Component({
    selector: 'simple-checkbox-component',
    template: '<input type="checkbox" [checked]="value" (change)="valueChange.emit($event.target.checked)"/>',
})
export class SimpleCheckboxComponent implements ICustomDynamicComponent<boolean> {
    value: boolean;
    valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();
}
