import {
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    Type,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Component({
    selector: 'custom-component',
    template: '<ng-container #container></ng-container>',
})
export class CustomComponent implements OnInit, ICustomDynamicComponent<any> {
    private readonly _controlValueChangeFn: (value: any) => void;
    private _value: any;

    @ViewChild('container', { read: ViewContainerRef }) entry;
    private component: ComponentRef<ICustomDynamicComponent<any>>;

    @Input() componentType: Type<any>;

    @Input()
    componentOptions: any;

    @Input()
    set value(v: any) {
        this._value = v;
        if (this.component) {
            this.component.instance.value =  v;
        }
    }
    get value(): any {
        return this._value;
    }

    @Output()
    readonly valueChange: EventEmitter<any> = new EventEmitter<any>();


    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
        this._controlValueChangeFn = (value: any) => this.onValueChange(value);
    }

    ngOnInit() {
        this.buildComponent();
    }

    private onValueChange(e: any): void {
        this._value = e;
        this.valueChange.emit(e);
    }

    private buildComponent(): void {
        if (!this.componentType) {
            return;
        }
        try {
            this.destroyComponent();
            // this.entry.clear();
            const componentFactory = this.componentFactoryResolver
                .resolveComponentFactory<ICustomDynamicComponent<any>>(this.componentType);
            const component = this.entry.createComponent(componentFactory, 0);
            this.initComponent(component);
            this.component = component;
        } catch (e) {
            console.error('load component error.');
            console.error(e);
        }
    }

    private initComponent(component: ComponentRef<ValueAccess>) {
        component.instance.value = this._value;
        if (component.instance.registerOnChange) {
            component.instance.registerOnChange(this._controlValueChangeFn);
        }
        if (component.instance.valueChange) {
            component.instance.valueChange.subscribe(this._controlValueChangeFn);
        }

        if (this.componentOptions) {
            Object.assign(component.instance, this.componentOptions);
        }
    }

    private destroyComponent(): void {
        if (this.component) {
            this.component.destroy();
        }
    }
}

interface ValueAccess extends ControlValueAccessor, ICustomDynamicComponent<any> {
}

export interface ICustomDynamicComponent<TValue> {
    value: TValue;
    valueChange: EventEmitter<TValue>;
}
