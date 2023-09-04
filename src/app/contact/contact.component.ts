import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../email.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({});
    

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit () {
    if (this.contactForm.valid) {
      this.emailService.sendMailContact(this.contactForm).subscribe((data) =>{
        Swal.fire(
          'Message send!',
          'We´re get in touch!',
          'success'
        ).then(function(){
          location.reload();
        })
        
      }) 
      console.log(this.contactForm.value);         
    }
  }

  sendMail(form: any){
    this.emailService.sendMailContact(form).subscribe((data)=>{
      Swal.fire(
        'Message send!',
        'We´re get in touch!',
        'success'
      ).then(function(){
        location.reload();
      })
    })
  }
}
