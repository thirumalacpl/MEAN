import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  posts: any[] = [];
  faLock = faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthService, private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) { // this code won't allow browser back button to go login page after login
      this.router.navigate(['admin']); 
    }
    this.loginService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.loginService.authLogin(this.loginForm.value).subscribe((data: any[]) => {
        console.log(data);
      });
      // this.auth.login(this.loginForm.value).subscribe(
      //   (result:any) => {
      //     console.log(result);
      //     this.router.navigate(['/admin']);
      //   },
      //   (err: Error) => {
      //     alert(err.message);
      //   }
      // );
    }
  }
  getProfile(){
    console.log("getProfile")
    this.loginService.getProfile().subscribe((data: any[]) => {
      console.log(data)
    });
  }
}