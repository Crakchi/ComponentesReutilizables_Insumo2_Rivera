import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @Input() pageTitle: string="";
  @Input() pageTitle2: string="";
  @Input() Page: string="";
  @Input() link1: string="";
  @Input() link2: string="";
}
