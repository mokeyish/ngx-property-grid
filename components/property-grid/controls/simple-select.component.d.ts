import { EventEmitter } from '@angular/core';
import { ICustomDynamicComponent } from '../custom.component';
export declare class SimpleSelectComponent implements ICustomDynamicComponent<any> {
    value: any;
    valueChange: EventEmitter<any>;
    options: any[];
    optionLabel(v: any): string;
    optionValue(v: any): any;
}
