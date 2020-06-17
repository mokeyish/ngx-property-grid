import {async, ComponentFixture, TestBed} from '@angular/core/testing';

// noinspection ES6PreferShortImport
import {PropertyGridComponent} from './property-grid.component';

describe('PropertyGridComponent', () => {
    let component: PropertyGridComponent;
    let fixture: ComponentFixture<PropertyGridComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PropertyGridComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PropertyGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
