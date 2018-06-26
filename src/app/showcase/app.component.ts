import {Component, EventEmitter} from '@angular/core';
import {meta, ICustomDynamicComponent} from '../components/property-grid';
import {MatCheckbox, MatSlider, MatSlideToggle} from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public student: ExampleStudentOptions = new ExampleStudentOptions();

    constructor() {
    }

    public get data(): string {
        return JSON.parse(JSON.stringify(this.student));
    }

    text: string;
}

@Component({
    selector: 'app-text-editor',
    template: `<input type="text" [value]="value" (change)="valueChange.emit($event.target.value)"/>`
})
export class SimpleTextEditorComponent implements ICustomDynamicComponent<string> {
    value: string;
    valueChange: EventEmitter<string> = new EventEmitter<string>();
}

export class ExampleEditorOptions {
    @meta({
        name: 'Font', description: 'The font editor to use', colSpan2: false,
        componentType: SimpleTextEditorComponent, group: 'Editor', hidden: false
    })
    font = 'Source Code Pro';

    @meta({name: 'Font size', group: 'Editor', valueConvert: parseInt, type: 'fontSize'})
    fontSize = 14;

    @meta({name: 'Font color', group: 'Editor', type: 'color'})
    fontColor = '#51f41c';

    @meta({name: 'jQuery', group: 'Plugins', componentType: MatCheckbox})
    jQuery = true;

    @meta({name: 'Card Style', group: 'Style', componentType: MatCheckbox})
    cardStyle = true;

    @meta({
        name: 'modernizr',
        description: 'Whether or not to include modernizr on the page',
        group: 'Plugins',
        componentType: MatSlideToggle
    })
    modernizr = false;

    @meta({
        name: 'Framework',
        description: 'Whether to include any additional framework',
        type: 'options',
        componentOptions: {options: ['None', {text: 'AngularJS', value: 'angular'}, {text: 'Backbone.js', value: 'backbone'}]}
    })
    framework = 'None';

}

export class ExampleStudentOptions {

    @meta({name: 'Birth', group: 'Basic Information', type: 'date', order: 4})
    birth = '2018-05-08';

    @meta({name: 'Name', group: 'Basic Information', type: 'text', order: 1})
    name = 'Lily';

    @meta({name: 'Age', group: 'Basic Information', valueConvert: parseInt, type: 'text', order: 2})
    age = 19;

    @meta({name: 'Telephone', type: 'telephone', group: 'Basic Information', hidden: true})
    telephone;

    @meta({name: 'Gender', group: 'Basic Information', type: 'sex', order: 3})
    gender = 'male';

    @meta({name: 'Editor Preference', type: 'subItems', initState: 'visible'})
    editor: ExampleEditorOptions = new ExampleEditorOptions();
}
