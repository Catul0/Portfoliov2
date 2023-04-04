import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nav-english',
  templateUrl: './nav-english.component.html',
  styleUrls: ['./nav-english.component.css']
})
export class NavEnglishComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  scrollToComponentEnglish(event: Event, id:any) {
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
