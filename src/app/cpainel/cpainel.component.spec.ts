import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpainelComponent } from './cpainel.component';

describe('CpainelComponent', () => {
  let component: CpainelComponent;
  let fixture: ComponentFixture<CpainelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpainelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
