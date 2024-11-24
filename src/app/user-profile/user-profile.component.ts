import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  userForm: FormGroup;
  photoUrl: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
    });
  }

  // Helper method to get a control
  getControl(controlName: string) {
    return this.userForm.controls[controlName];
  }

  onPhotoUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.photoUrl = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('User Profile Updated:', this.userForm.value);
      alert('Profile saved successfully!');
    }
  }

  resetForm(): void {
    this.userForm.reset();
    this.photoUrl = null;
  }
}
