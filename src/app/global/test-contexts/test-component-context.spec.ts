import { Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { initComponent, releaseMemory } from 'src/app/global/test-contexts/test-context.spec';

export interface TestComponentContext<H> {
  fixture: ComponentFixture<H>;
  component: H;
  data: any;

  create(
    componentType: Type<H>,
    imports?: any[],
    declarations?: any[],
    providers?: any[],
    entryComponents?: any[]
  ): void;
}

export function setupComponent(): void {
  beforeEach(function<H>(this: TestComponentContext<H>) {
    // in declarations should be defined also used component
    this.create = (
      componentType: Type<H>,
      imports: any[] = [],
      declarations: any[] = [],
      providers: any[] = [],
      entryComponents: any[] = []
    ) => {
      initComponent(this, componentType, imports, declarations, providers, entryComponents);
      this.data = {};
    };
  });

  afterEach(function<H, S>(this: TestComponentContext<H>) {
    releaseMemory(this.fixture);
  });
}
