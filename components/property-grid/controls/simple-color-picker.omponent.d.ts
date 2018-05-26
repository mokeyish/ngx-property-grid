import { EventEmitter } from '@angular/core';
import { ICustomDynamicComponent } from '../custom.component';
export declare class SimpleColorComponent implements ICustomDynamicComponent<string> {
    value: string;
    valueChange: EventEmitter<string>;
}
