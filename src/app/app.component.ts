import { Component } from '@angular/core';
import {$meta} from './components/property-grid/property-grid-item-meta';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';
    public student: Student = new Student();
    constructor() {
        this.student.name = '小明';
        this.student.age = 19;
    }
}


export class Student {
    @$meta({name: '名字', description: '学生的名字', group: '基本信息', hidden: false})
    name: string;

    @$meta({name: '年龄', description: '学生的年龄', group: '基本信息'})
    age: number;

    @$meta({name: '地址', description: '住址', group: '详细信息'})
    address: string;
}
