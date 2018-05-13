import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-latte',
  templateUrl: './show-latte.component.html',
  styleUrls: ['./show-latte.component.css']
})
export class ShowLatteComponent implements OnInit {
  @Input() showItem: any;
  constructor() { }

  ngOnInit() {
  }

}
