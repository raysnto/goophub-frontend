import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoUploadComponent } from './novo-upload.component';

describe('NovoUploadComponent', () => {
  let component: NovoUploadComponent;
  let fixture: ComponentFixture<NovoUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
