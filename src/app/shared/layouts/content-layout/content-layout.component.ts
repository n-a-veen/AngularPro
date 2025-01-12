import { AfterViewChecked, Component, ElementRef, OnInit } from '@angular/core';
import { Menu, NavService } from '../../services/nav.service';
import { LoaderService } from '../../services/loader.service';
@Component({
    selector: 'app-content-layout',
    templateUrl: './content-layout.component.html',
    styleUrl: './content-layout.component.scss',
})
export class ContentLayoutComponent implements OnInit, AfterViewChecked {
  public menuItems!: Menu[];
  public loaderVisible: boolean = true;

  constructor(
    public navServices: NavService,
    private elementRef: ElementRef,
    private loaderService: LoaderService
  ) {
    this.navServices.items.subscribe((menuItems: any) => {
      this.menuItems = menuItems;
    });    
  }


  ngOnInit() {
    // Subscribe to loader state
    this.loaderService.loaderState$.subscribe((isVisible) => {
      this.loaderVisible = isVisible;
    });
  }

  ngAfterViewChecked() {
    this.loaderService.hideLoader(); // Hide loader once page is fully loaded
  }

  clearToggle() {
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    html?.setAttribute('data-toggled', 'close');
    document.querySelector('#responsive-overlay')?.classList.remove('active');
  }
  togglesidemenuBody() {
    if(localStorage.getItem('ynex-sidemenu-styles') == 'icontext'){
      document.documentElement.removeAttribute('icon-text');
    }
    if (document.documentElement.getAttribute('data-nav-layout') == 'horizontal' && window.innerWidth > 992) {
      this.closeMenu();
    }
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    if (window.innerWidth <= 992) {
      html?.setAttribute(
        'data-toggled',
        html?.getAttribute('data-toggled') == 'close' ? 'close' : 'close'
      );
    }
  }
  closeMenu() {
    this.menuItems?.forEach((a: any) => {
      if (this.menuItems) {
        a.active = false;
      }
      a?.children?.forEach((b: any) => {
        if (a.children) {
          b.active = false;
        }
      });
    });
  }
}