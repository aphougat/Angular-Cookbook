import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss']
})
export class VcLogsComponent implements OnInit, OnChanges {
  @Input() vName;
  logs: string[] = [];
  constructor() { }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currValue = changes.vName.currentValue.trim();
    if(changes.vName.isFirstChange())
    {
      this.logs.push(`initial version is ${currValue}`);
    }else{
      this.logs.push(`updated version is ${currValue}`);
    }
  }



}
