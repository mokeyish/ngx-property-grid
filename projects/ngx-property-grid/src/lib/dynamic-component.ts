import {EventEmitter} from '@angular/core';


export interface IDynamicComponent<TValue> {
  value: TValue;
  valueChange: EventEmitter<TValue>;
}
