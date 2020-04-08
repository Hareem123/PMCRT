import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../../services/user.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loading = false;
  loginForm: FormGroup;
  emailAlert: string = "Valid email is required: ex@abc.xyz";
  passwordAlert: string = "You need to specify at least 5 characters";

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  myStyle: any;
  myParams: any;

  ngOnInit() {
    if(this.userService.isUserAuthorized()) {
      this.router.navigate(['/dashboard'])
    }
    this.loginPageUI();
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.email],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(500)
        ])
      ]
    });
  }

  onSubmit(value) {
    console.log(value.value);
    this.loading = true;
    this.userService.loginUser(value.value).subscribe(
      (res: any) => {
        if (res["success"]) {
          this.loading = false;
          this.userService.setLoginUser(res.response);
          this.loginForm.reset();
          this.router.navigate(["/dashboard"]);
          this.toastr.success("Login Successful", res["response"]["email"]);
        } else {
          this.loading = false;
          this.toastr.error("Email and Password is not valid!", "User");
        }
      },
      err => {
        this.loading = false;
        this.toastr.error("Error occurred, Please try again.", "Error");
      }
    );
  }

  loginPageUI() {
    this.myStyle = {
      width: "100%",
      height: "100%",
      "background-image": "linear-gradient(110deg,#000000 1%,#097040 100%)",
      position: "absolute",
      "z-index": -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };
    this.myParams = {
      particles: {
        number: {
          value: 20,
          density: {
            enable: true,
            value_area: 500
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      }
    };
  }
}
