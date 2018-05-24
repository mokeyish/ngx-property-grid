# NgxPropertyGrid

A small and simple property grid in angular to view/edit POJOs, excellent if you have a "settings" object you want to give the user to edit (that's why I have created it). [Play online](https://stackblitz.com/edit/angular-veuf4i).

## Dependencies

* angular

## Usage

* The Options

```ts
export interface PropertyGridItemMeta {
    name: string;
    description?: string;
    order?: string;
    group?: string;
    hidden?: boolean; // default false
    componentType?: Type<any>; // for create custom component
    singleRow?: boolean; // default true
    options?: any;
    type?: string; // boolean number options label color
    valueConvert?: (value: any) => any;
}
```

* The Example Options

```TypeScript
export class ExampleEditorOptions {
    @meta({name: 'Font', description: 'The font editor to use', componentType: SimpleTextEditorComponent, group: 'Editor', hidden: false})
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

* The html part:

```HTML
<ngx-property-grid [width]="'300px'" [options]="editor"></ngx-property-grid>
```
