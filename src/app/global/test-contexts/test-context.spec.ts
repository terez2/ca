import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Type} from '@angular/core';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {TestComponentContext} from 'src/app/global/test-contexts/test-component-context.spec';
import {TestContainerContext} from 'src/app/global/test-contexts/test-container-context.spec';

export function releaseMemory<H>(fixture: ComponentFixture<H>) {
    if (fixture) {
        fixture.destroy();
        fixture.nativeElement.remove();
    }
}

export function initComponent<H, S>(
    context: TestComponentContext<H> | TestContainerContext<H, S>,
    componentType: Type<H>,
    imports: any[] = [],
    declarations: any[] = [],
    providers: any[] = [],
    entryComponents: any[] = []
) {
    try {
        configureTestingModule(imports, declarations, providers, entryComponents);
        context.fixture = TestBed.createComponent(componentType);
        context.component = context.fixture.componentInstance;
    } catch (e) {
        console.error(e);
    }
}

export function configureTestingModule(
    imports: any[] = [],
    declarations: any[] = [],
    providers: any[] = [],
    entryComponents: any[] = []
) {
    TestBed.configureTestingModule({
        imports: imports,
        declarations: declarations,
        providers: providers
    }).overrideModule(BrowserDynamicTestingModule, {
        set: {
            entryComponents: entryComponents
        }
    });
}
