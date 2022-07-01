import { TestBed } from '@angular/core/testing';

import { NovoUploadService } from './novo-upload.service';

describe('NovoUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NovoUploadService = TestBed.get(NovoUploadService);
    expect(service).toBeTruthy();
  });
});
