import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  
  navbarTop = 40; // Posição inicial da barra de navegação (abaixo da barra de acessibilidade)
  previousScrollPosition = 0; // Para rastrear a rolagem anterior

  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router) {}

  ngOnInit() {
   this.adicionaHoverMenu();
  }


  adicionaHoverMenu(){
     // Adicionar comportamento de "hover" aos dropdowns
     const dropdowns = this.el.nativeElement.querySelectorAll('.nav-item.dropdown');
     dropdowns.forEach((dropdown: HTMLElement) => {
       this.renderer.listen(dropdown, 'mouseenter', () => {
         dropdown.classList.add('show');
         const menu = dropdown.querySelector('.dropdown-menu');
         if (menu) menu.classList.add('show');
       });
       this.renderer.listen(dropdown, 'mouseleave', () => {
         dropdown.classList.remove('show');
         const menu = dropdown.querySelector('.dropdown-menu');
         if (menu) menu.classList.remove('show');
       });
     });
  }

  // Aumentar o tamanho da fonte
  increaseFontSize() {
    document.body.style.fontSize = 'larger';
  }

  // Diminuir o tamanho da fonte
  decreaseFontSize() {
    document.body.style.fontSize = 'smaller';
  }

  // Alternar modo de alto contraste
  toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
  }

  // Alternar modo escuro
  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll === 0) {
      // Quando a rolagem estiver no topo da página
      this.navbarTop = 40; // Valor padrão abaixo da barra de acessibilidade
    } else {
      // Rolar para baixo: esconde a barra de navegação
      this.navbarTop = 0; 
    }
    this.previousScrollPosition = currentScroll;
  }
}
