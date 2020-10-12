import { Component, EventEmitter } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { IDynamicComponent, meta, PropertyItemMeta } from 'ngx-property-grid';
import { IPropertyGridMetaDataProvider } from 'projects/ngx-property-grid/src/lib/IPropertyGridMetaDataProvider';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    private _metaDataType: string = "static";
    public student: IExampleStudentOptions = new ExampleStudentOptions();

    constructor() {
    }

    public get metaDataType(): string { return this._metaDataType; }
    public set metaDataType(value: string) {
        this._metaDataType = value;
        if (value == 'static')
            this.student = new ExampleStudentOptions();
        else
            this.student = new DynamicExampleStudentOptions();
    }


    public get data(): string {
        return JSON.parse(JSON.stringify(this.student));
    }

    text: string;

    onHandleReset(): void {
        this.student.age = 1;
        this.student.birth = '2000-01-01';
        this.student.description = 'default';
        this.student.gender = 'male';
        this.student.name = 'default';
        this.student.telephone = '0000000000';
        this.student.editor.cardStyle = false;
        this.student.editor.font = 'Courier New';
        this.student.editor.fontColor = '#000000';
        this.student.editor.fontSize = 10;
        this.student.editor.framework = 'None';
        this.student.editor.jQuery = false;
        this.student.editor.modernizr = false;
    }

}

@Component({
    selector: 'app-text-editor',
    template: `<input type="text" [value]="value" [disabled]="disabled" (change)="valueChange.emit($event.target.value)" />`
})
export class SimpleTextEditorComponent implements IDynamicComponent<string> {
    value: string;
    valueChange: EventEmitter<string> = new EventEmitter<string>();
    disabled: boolean;
    disabledChange: EventEmitter<boolean> = new EventEmitter<boolean>();
}


export class ExampleEditorOptions {
    constructor() { }

    @meta({
        name: 'Font', description: 'The font editor to use', colSpan2: false,
        type: SimpleTextEditorComponent, group: 'Editor', hidden: false
    })
    font = 'Source Code Pro';

    @meta({ name: 'Font size', group: 'Editor', valueConvert: parseInt, type: 'fontSize' })
    fontSize = 14;

    @meta({ name: 'Font color', group: 'Editor', type: 'color' })
    fontColor = '#51f41c';

    @meta({ name: 'jQuery', group: 'Plugins', type: 'checkbox' })
    public jQuery: boolean = true;

    @meta({ name: 'Card Style', group: 'Style', type: MatCheckbox })
    cardStyle = true;

    @meta({
        name: 'modernizr',
        description: 'Whether or not to include modernizr on the page',
        group: 'Plugins',
        type: MatSlideToggle
    })
    modernizr = false;

    @meta({
        name: 'Framework',
        description: 'Whether to include any additional framework',
        type: 'options',
        options: ['None', { text: 'AngularJS', value: 'angular' }, { text: 'Backbone.js', value: 'backbone' }]
    })
    framework = 'None';
}

export interface IExampleStudentOptions {
    birth: string;
    name: string;
    description: string;
    age: number;
    telephone: string;
    gender: string;
    editor: ExampleEditorOptions;
}


export class ExampleStudentOptions implements IExampleStudentOptions{

    @meta({ name: 'Birth', group: 'Basic Information', type: 'date', order: 4 })
    birth = '2018-05-08';

    @meta({ name: 'Name', group: 'Basic Information', type: 'text', order: 1, link: 'http://www.baidu.com' })
    name = 'Lily';

    @meta({ name: 'Description', group: 'Basic Information', type: 'text', readonly: true, order: 1, link: 'http://www.baidu.com' })
    description = 'A readonly string';

    @meta({ name: 'Age', group: 'Basic Information1', valueConvert: parseInt, type: 'text', order: 2 })
    age = 19;

    @meta({ name: 'Telephone', type: 'telephone', group: 'Basic Information1', hidden: true })
    telephone;

    @meta({ name: 'Gender', group: 'Basic Information', type: 'sex', order: 3 })
    gender = 'male';

    @meta({ name: 'Editor Preference', type: 'subItems', initState: 'visible' })
    editor: ExampleEditorOptions = new ExampleEditorOptions();
}


export class DynamicExampleStudentOptions implements IExampleStudentOptions, IPropertyGridMetaDataProvider {

    birth = '2018-05-08';
    name = 'Lily';
    description = 'A readonly string';
    age = 19;
    telephone;
    gender = 'male';
    editor: ExampleEditorOptions = new ExampleEditorOptions();

    public providePropertyGridMetaData(): PropertyItemMeta[] {
        let properties: PropertyItemMeta[] = [];
        properties.push({ key: 'birth', name: 'Birth', group: 'Basic Information', type: 'date', order: 4 });
        properties.push({ key: 'name', name: 'Name', group: 'Basic Information', type: 'text', order: 1, link: 'http://www.baidu.com' });
        properties.push({ key: 'description', name: 'Description', group: 'Basic Information', type: 'text', readonly: true, order: 1, link: 'http://www.baidu.com' });
        if (this.gender == 'male') {
            properties.push({ key: 'age', name: 'Age', group: 'Basic Information1', valueConvert: parseInt, type: 'text', order: 2 });
            properties.push({ key: 'telephone', name: 'Telephone', type: 'telephone', group: 'Basic Information1', hidden: true });
            properties.push({ key: 'editor', name: 'Editor Preference', type: 'subItems', initState: 'visible' });
        }
        properties.push({ key: 'gender', name: 'Gender', group: 'Basic Information', type: 'sex', order: 3 });
        return properties;
    }
}
