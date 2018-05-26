import { EventEmitter } from '@angular/core';
import { ICustomDynamicComponent } from '../custom.component';
export declare class SimpleCheckboxComponent implements ICustomDynamicComponent<boolean> {
    value: boolean;
    valueChange: EventEmitter<boolean>;
}
