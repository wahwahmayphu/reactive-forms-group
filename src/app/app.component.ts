import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
  profileForm = new FormGroup({
    name: new FormControl('mp'),
    password: new FormControl('123'),
    email: new FormControl('mp@test.com'),
  });
  
  submitData(){
    console.log(this.profileForm.value);
  }

  setValues() {
    this.profileForm.setValue({
      name: 'peter',
      password: '123',
      email: 'peter.test.com'
    })
  }
}
