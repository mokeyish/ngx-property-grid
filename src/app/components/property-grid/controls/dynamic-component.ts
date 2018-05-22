/**
 * Created by YISH on 2018/01/12.
 */

import {
    Component,
    ComponentFactoryResolver, DoCheck, Input, OnChanges,
    OnInit, SimpleChanges, Type, ViewContainerRef
} from '@angular/core';
import {ComponentRef} from '@angular/core/src/linker/component_factory';
import * as _ from 'lodash';

@Component({
    selector: 'dynamic-component',
    template: ``
})
export class DynamicComponent implements OnInit, DoCheck, OnChanges {
    private component: ComponentRef<IDynamicComponent>;

    @Input() componentType: Type<any>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private entry: ViewContainerRef) {
    }

    ngOnInit() {
        this.buildComponent();
    }

    ngDoCheck(): void {
        if (this.component) {
            if (this.component.componentType !== this.componentType) {
                this.buildComponent();
            }
            // if (!_.isEqual(this.component.instance.options, this.componentOptions)) {
            //     this.options.componentOptions = this.componentOptions = this.component.instance.options;
            // }
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        // if (changes.options && changes.options.currentValue) {
        //     if (changes.options.currentValue.componentOptions !== this.componentOptions) {
        //         this.componentOptions = changes.options.currentValue.componentOptions;
        //         if (this.component) {
        //             this.component.instance.options = this.componentOptions;
        //         }
        //     }
        // }
    }

    private buildComponent(): void {
        if (!this.componentType) {
            return;
        }
        try {
            if (this.component) {
                this.component.destroy();
            }
            // this.entry.clear();
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory<IDynamicComponent>(this.componentType);
            const component = this.entry.createComponent(componentFactory);
            // component.instance.options = this.componentOptions;
            this.component = component;
        } catch (e) {
            console.error('load component error.');
            console.error(e);
        }
    }
}

export interface IComponentLoaderOptions {
    componentType: Type<IDynamicComponent | any>;
    componentOptions?: any;
}

export interface IDynamicComponent {
    options: any;
}
