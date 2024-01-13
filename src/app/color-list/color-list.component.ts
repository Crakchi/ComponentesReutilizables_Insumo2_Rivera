import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.scss'],
})
export class ColorListComponent  implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() color: string | undefined;

}
