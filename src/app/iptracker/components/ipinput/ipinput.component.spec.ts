import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpinputComponent } from './ipinput.component';

describe('IpinputComponent', () => {
  let component: IpinputComponent;
  let fixture: ComponentFixture<IpinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpinputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
