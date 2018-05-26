import {Component, EventEmitter} from '@angular/core';
import {ICustomDynamicComponent} from '../custom.component';

@Component({
    selector: 'simple-label-component',
    template: '<label>{{value}}</label>',
})
export class SimpleLabelComponent implements ICustomDynamicComponent<string> {
    value: string;
    valueChange: EventEmitter<string> = new EventEmitter<string>();
}
