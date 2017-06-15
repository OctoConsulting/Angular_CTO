import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInBoxContentComponent } from './sign-in-box-content.component';

describe('SignInBoxContentComponent', () => {
  let component: SignInBoxContentComponent;
  let fixture: ComponentFixture<SignInBoxContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInBoxContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInBoxContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
