import { EventEmitter } from '@angular/core';
import { ICustomDynamicComponent } from '../custom.component';
export declare class SimpleTextComponent implements ICustomDynamicComponent<string> {
    value: string;
    valueChange: EventEmitter<string>;
}
