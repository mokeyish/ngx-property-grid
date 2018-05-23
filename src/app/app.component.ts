import { Component } from '@angular/core';
import {$meta} from './components/property-grid/property-grid-item-meta';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public editor: EditorConf = new EditorConf();
    constructor() {
    }

    public get data(): string {
        return JSON.stringify(this.editor);
    }
}


export class EditorConf {
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

    // @$meta({name: '分数', componentType: PropertyGridComponent, hidden: true})
    // score: Score;
}
