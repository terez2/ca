import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-activity-popover',
  templateUrl: './activity-popover.component.html',
  styleUrls: ['./activity-popover.component.scss'],
})
export class ActivityPopoverComponent implements OnInit {
  @Input() text: string;

  constructor() { }

  ngOnInit() {}

}
