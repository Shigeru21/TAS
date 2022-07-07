import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import Validation   from '../validation/validation'
import { UsersDataService } from '../services/users-data.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
  });
  users:any;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder, 
    private userData: UsersDataService
    )
    { 
    this.userData.users().subscribe((data) => {
      this.users = data;
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
          ]
       ],
        repeatPassword: ['', Validators.required],

      },
      {
        validators: [Validation.match('password', 'repeatPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  resertForm(){
    this.form.reset();
  }

  onSubmit( data: any) : void {

    console.warn(data);
    this.userData.saveUser(data).subscribe((result) =>{
      console.warn(result);
    })
    this.submitted = true;

    if (this.form.invalid) {
      console.log('Disable SignUp')
      return;
    }

    console.log(this.form.value);
  }
}
