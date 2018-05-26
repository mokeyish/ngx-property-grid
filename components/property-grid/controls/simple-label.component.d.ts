import { EventEmitter } from '@angular/core';
import { ICustomDynamicComponent } from '../custom.component';
export declare class SimpleLabelComponent implements ICustomDynamicComponent<string> {
    value: string;
    valueChange: EventEmitter<string>;
}
