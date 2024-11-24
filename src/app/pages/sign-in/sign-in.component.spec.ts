import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have invalid form when empty', () => {
    expect(component.signInForm.valid).toBeFalsy();
  });

  it('should validate email and password fields', () => {
    const email = component.signInForm.controls['email'];
    const password = component.signInForm.controls['password'];

    email.setValue('');
    password.setValue('');
    expect(component.signInForm.valid).toBeFalsy();

    email.setValue('test@example.com');
    password.setValue('123456');
    expect(component.signInForm.valid).toBeTruthy();
  });
});