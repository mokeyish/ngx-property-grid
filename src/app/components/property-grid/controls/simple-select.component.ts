import {Component, EventEmitter} from '@angular/core';
import {ICustomDynamicComponent} from '../custom.component';

@Component({
    selector: 'simple-select-component',
    template: `
        <select (change)="valueChange.emit($event.target.value)">
            <option [value]="optionValue(option)" *ngFor="let option of options">{{optionLabel(option)}}</option>
        </select>
    `,
})
export class SimpleSelectComponent implements ICustomDynamicComponent<any> {
    value: any;
    valueChange: EventEmitter<any> = new EventEmitter<any>();
    options: any[];

    optionLabel(v: any): string {
        if (typeof v === 'string') {
            return v;
        }
        if (v.text) {
            return v.text;
        }
        if (v.label) {
            return v.label;
        }
        return v;
    }

    optionValue(v: any): any {
        return v && v.value ? v.value : v;
    }
}
