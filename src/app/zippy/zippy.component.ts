import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input('zippy-title') zippyTitle: string;
  isExpanded: boolean;
  toggle() {
    this.isExpanded = !this.isExpanded
  }
}
