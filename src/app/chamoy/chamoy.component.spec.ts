import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamoyComponent } from './chamoy.component';

describe('ChamoyComponent', () => {
  let component: ChamoyComponent;
  let fixture: ComponentFixture<ChamoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChamoyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
