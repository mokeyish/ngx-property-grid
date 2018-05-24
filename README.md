# NgxPropertyGrid

A small and simple property grid in angular to view/edit POJOs, excellent if you have a "settings" object you want to give the user to edit (that's why I have created it). [Play online](https://stackblitz.com/edit/angular-veuf4i).

## Dependencies

* angular

## Usage

```TypeScript
export class ExmapleEditorOptions {
    @$meta({name: 'Font', description: 'The font editor to use', group: 'Editor', hidden: false})
    font = 'Source Code Pro';

    @$meta({name: 'Font size', group: 'Editor', type: 'number', valueConvert: parseInt})
    fontSize = 14;

    @$meta({name: 'Font color', group: 'Editor', type: 'color'})
    fontColor = '#51f41c';

    @$meta({name: 'jQuery', group: 'Plugins', type: 'checkbox'})
    jQuery = true;

    @$meta({name: 'modernizr', description: 'Whether or not to include modernizr on the page', group: 'Plugins', type: 'checkbox'})
    modernizr = false;

    @$meta({
        name: 'Framework',
        description: 'Whether to include any additional framework',
        type: 'options',
        options: ['None', {text: 'AngularJS', value: 'angular'}, {text: 'Backbone.js', value: 'backbone'}]
    })
    framework = 'None';
}
```

```HTML
<ngx-property-grid [width]="'300px'" [options]="editor"></ngx-property-grid>
```
