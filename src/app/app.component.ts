import {Component, EventEmitter} from '@angular/core';
import {meta, IDynamicComponent} from './components/property-grid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public editor: ExampleEditorOptions = new ExampleEditorOptions();

    constructor() {
    }

    public get data(): string {
        return JSON.stringify(this.editor);
    }

    text: string;
}

@Component({
    selector: 'app-text-editor',
    template: `<input type="text" [value]="value" (change)="valueChange.emit($event.target.value)"/>`
})
export class SimpleTextEditorComponent implements IDynamicComponent<string> {
    value: string;
    valueChange: EventEmitter<string> = new EventEmitter<string>();
}


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
