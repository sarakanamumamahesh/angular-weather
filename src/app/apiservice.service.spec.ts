import { TestBed ,async,inject} from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';

describe('ApiserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
  }));

  it('should be created', () => {
    const service: ApiserviceService = TestBed.get(ApiserviceService);
    expect(service).toBeTruthy();
  });
});
