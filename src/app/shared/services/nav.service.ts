import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
// Menu
export interface Menu {
  headTitle?: string;
  headTitle2?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeValue?: string;
  badgeClass?: string;
  badgeText?: string;
  active?: boolean;
  selected?: boolean;
  bookmark?: boolean;
  children?: Menu[];
  children2?: Menu[];
  Menusub?: boolean;
  target?: boolean;
  menutype?:string
}

@Injectable({
  providedIn: 'root',
})
export class NavService implements OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  // Search Box
  public search = false;

  // Language
  public language = false;

  // Mega Menu
  public megaMenu = false;
  public levelMenu = false;
  public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

  // Collapse Sidebar
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth < 991 ? false : true;

  // Full screen
  public fullScreen = false;
  active: any;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
          this.megaMenu = false;
          this.levelMenu = false;
        }
        if (evt.target.innerWidth < 1199) {
          this.megaMenuColapse = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
        this.megaMenu = false;
        this.levelMenu = false;
      });
    }
  }

  ngOnDestroy() {
    this.unsubscriber.next;
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    { headTitle: 'MAIN' },
    {
      title: 'Home',
      icon: 'home',
      type: 'link',
      badgeClass:'warning',
      badgeText:'warning',
      path: '/home/dashboard',
      badgeValue:'',
      selected : true,
      active: true
    },{ headTitle: 'B2B Services' },
    {
      title: 'Banking',
      type: 'sub',
      icon: 'box',
      active: false,
      menutype:'mega-menu',
      children: [
        {
          path: '/uielements/alerts',
          title: 'Move To Bank',
          type: 'link',
        },
      ],
    },
    {
      title: 'Utilites',
      type: 'sub',
      icon: 'medal',
      active: false,
      children: [
        {
          path: '/home/mobile-recharge',
          title: 'Mobile Recharge',
          type: 'link',
        },
        {
          path: '/home/dth-recharge',
          title: 'DTH Recharge',
          type: 'link',
        },
    
        {
          path: '/utilities/colors',
          title: 'Fast Tag',
          type: 'link',
        }
      ],
    },
    {
      title: 'Document',
      type: 'sub',
      icon: 'file',
      active: false,
      children: [
        {
          title: 'NSDL Pan Card',
          type: 'sub',
          active: false,
          children: [
            {
              path: '/form/forms-elements/inputs',
              title: 'Inputs',
              type: 'link',
            }
          ],
        }
      ],
    },
    {
      title: 'Financial',
      type: 'sub',
      icon: 'party ',
      active: false,
      children: [
        {
          path: '/advancedui/accordions',
          title: 'Money Transfer',
          type: 'link',
        },
    
        {
          path: '/advancedui/draggable-cards',
          title: 'Fund Request',
          type: 'link',
        },
        {
          path: '/advancedui/modals',
          title: 'Fund Transfer',
          type: 'link',
        }        
      ],
    },
    {
      icon: 'gift',
      title: 'Service',
      type: 'sub',
      children: [
        {
          path: '/advancedui/accordions',
          title: 'AEPS',
          type: 'link',
        },
    
        {
          path: '/advancedui/draggable-cards',
          title: 'Aadhar Pay',
          type: 'link',
        },
        {
          path: '/advancedui/modals',
          title: 'Micro ATM',
          type: 'link',
        } ,
        {
          path: '/advancedui/modals',
          title: 'Fino CMS',
          type: 'link',
        }        
      ],
    },
    { headTitle: 'Online Services' },
    {
      title: 'Payment',
      type: 'sub',
      icon: 'grid-alt',
      active: false,
      children: [
        {
          path: '/home/transaction-history',
          title: 'Transactions history',
          type: 'link',
        }
      ],
    } 
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
