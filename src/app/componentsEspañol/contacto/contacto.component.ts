import { Component} from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent  {
  apellido:string = "";
  nombre:string = "";
  email: string = "";
  message: string = "";
  opcion=false;
  alerta:string = "Gracias por contactar conmigo! Me comunicare contigo lo antes posible.";
  constructor() { }

  //esta funcion aca era para las alertas de validaciones que eran diferentes

  //ngAfterViewInit() {
    // const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll('.needs-validation');
    // Array.from(forms).forEach((form: HTMLFormElement) => {
    //   form.addEventListener('submit', (event: Event) => {
    //     if (!form.checkValidity()) {
    //       event.preventDefault();
    //       event.stopPropagation();
    //     }
    //     form.classList.add('was-validated');
    //   }, false);
    // });
  //}

  //esta funcion es la que hace que no se vaya de la pagina al enviar el correo
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
