import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  scrollToComponent(event: Event, id:any) {
    event.preventDefault();
    const miComponente = document.querySelector('#'+id) as HTMLElement;
    const yOffset = -60; 
    const y = miComponente.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});

    const offcanvas = document.querySelector('#offcanvasDarkNavbar') as HTMLElement;
    const botontoggle = document.querySelector('#botontoggle') as HTMLElement;
    offcanvas.classList.remove('show');
    botontoggle.setAttribute('aria-expanded', 'false');
  }
  
}
