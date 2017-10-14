import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../domain/user';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements OnInit {
  @Input() user: User;
  @Output() boomboom = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  boom(text: string) {
    this.boomboom.emit('emit from content component:' + text + this.user.name);
  }

}
