# NgxPropertyGrid

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/ngx-property-grid.svg)](https://badge.fury.io/js/ngx-property-grid)
[![Build Status](https://travis-ci.org/mokeyish/ngx-property-grid.svg?branch=master)](https://travis-ci.org/mokeyish/ngx-property-grid)

A small and simple property grid in angular to view/edit POJOs, excellent if you have a "settings" object you want to give the user to edit (that's why I have created it). [Play online](https://stackblitz.com/edit/angular-veuf4i).

## Dependencies

* angular2+
* [ngx-template](https://www.npmjs.com/package/ngx-template)

## Usage

1. Import
    ```TypeScript
    import {PropertyGridModule} from 'ngx-property-grid';

    import {NgxTemplateModule} from 'ngx-template';
    ```
    If you need animation,you should import `BrowserAnimationsModule` in your `app.module.ts`.
2. Getting Started
    * Html
        * Basic
            ```HTML
            <ngx-property-grid [width]="'300px'" [options]="editor"></ngx-property-grid>
            ```
        * Template
            ```Html
            <ngx-property-grid [width]="'300px'" [options]="editor">
                <ng-template ngxTemplate="text" let-p>
                    <input type="text" [value]="p.value" (change)="p.value = $event.target.value">
                </ng-template>
                <ng-template ngxTemplate="color" let-p>
                    <input type="color" [value]="p.value" (change)="p.value = $event.target.value">
                </ng-template>
            </ngx-property-grid>
            ```
    * Object options
        ```ts
        export class ExampleEditorOptions {
            @meta({name: 'Font', description: 'The font editor to use', type: SimpleTextEditorComponent, group: 'Editor', hidden: false})
            font = 'Source Code Pro';

            @meta({name: 'Font size', group: 'Editor', type: 'number', valueConvert: parseInt})
            fontSize = 14;

            @meta({name: 'Font color', group: 'Editor', type: 'color'})
            fontColor = '#51f41c';

            @meta({name: 'jQuery', group: 'Plugins', type: 'checkbox'})
            jQuery = true;

            @meta({name: 'modernizr', description: 'Whether or not to include modernizr on the page', group: 'Plugins', type: 'checkbox'})
            modernizr = false;

            @meta({
                name: 'Framework',
                description: 'Whether to include any additional framework',
                type: 'options',
                options: ['None', {text: 'AngularJS', value: 'angular'}, {text: 'Backbone.js', value: 'backbone'}]
            })
            framework = 'None';
        }
        ```
3. The metadata options declare

```ts
 export interface PropertyItemMeta {
    name: string; // The display name of the property in the grid
    description?: string; // A description of the property, will be used as tooltip on an hint element (a span with text "[?]")
    order?: number; // The display order.
    group?: string; //  The group this property belongs to
    hidden?: boolean; // Whether this property should be hidden in the grid, default is false (can be omitted).
    initState?: string; // - hidden/visible. If hidden then subItems should init by hidden state. default is hidden
    type?: 'color' | 'date' | 'checkbox' | 'text' | 'options' | string | Type<ControlValueAccessor | ICustomDynamicComponent<any>>;
    // options: boolean number options label color,
    // or an custom component should be implement ControlValueAccessor or ICustomDynamicComponent<any>
    options?: any; // options for type
    colSpan2?: boolean; //  - true/false. If true then property input will span both columns and will have no name/label
    // (useful for textarea custom type)
    valueConvert?: (value: any) => any; // convert the value, eg. parseInt
}
```

* The result would be ([live demo](https://ngx-property-grid.yish.vip/demo)):
  ![jqPropertyGrid](https://github.com/mokeyish/ngx-property-grid/raw/master/example.png)

## The metadata object

As seen from the example above the metadata object **can** be used (it's optional) in order to describe the object properties.
Each proprty in the metadata object could have the following:

* name - The display name of the property in the grid 
* description - A description of the property, will be used as tooltip on an hint element (a span with text "[?]")
* hidden - Whether this property should be hidden in the grid, default is false (can be omitted).
* group - The group this property belongs to
* type - The type of the property, supported are:
  * boolean or checkbox - A checkbox would be used
  * number -  simple textbox
  * color - simple textbox
  * options - A dropdown list would be used in case the metadata contains the `options` array property
  * label - A label will be used, useful for uneditable / read-only properties
* colspan2 - true/false. If true then property input will span both columns and will have no name/label (useful for textarea custom type)
