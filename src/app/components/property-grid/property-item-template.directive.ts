import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
    selector: '[propertyType]'
})
export class PropertyItemTemplateDirective {
    @Input('propertyType') name: string;

    constructor(public template: TemplateRef<any>) {
    }
}
