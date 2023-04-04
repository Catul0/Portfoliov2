import { Component} from '@angular/core';

@Component({
  selector: 'app-contact-english',
  templateUrl: './contact-english.component.html',
  styleUrls: ['./contact-english.component.css']
})
export class ContactEnglishComponent {
  apellido:string = "";
  nombre:string = "";
  email: string = "";
  message: string = "";
  opcion=false;
  alerta:string = "Thank you for contacting me! I will get back to you as soon as possible.";
  constructor() { }

  // ngAfterViewInit() {
  //   const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll('.needs-validation');
  //   Array.from(forms).forEach((form: HTMLFormElement) => {
  //     form.addEventListener('submit', (event: Event) => {
  //       if (!form.checkValidity()) {
  //         event.preventDefault();
  //         event.stopPropagation();
  //       }
  //       form.classList.add('was-validated');
  //     }, false);
  //   });
  // }


  onSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch('https://formspree.io/f/mpzeydla', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        this.opcion=true;
        event.target.reset();
        setTimeout(()=>{
          this.opcion=false;
        }, 7000);
      } else {
        throw new Error('Response not OK');
      }
    })
      .then(json => console.log(json))
      .catch(error => {
        console.error(error);
      });
  }



}
