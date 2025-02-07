import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss']
})
export class VcLogsComponent implements OnInit {

  _vName: string;
  logs: string[] = [];
  @Input()
  get vName(){
    return this._vName;
  }
  set vName(name: string){
    if (!name) { return; }
    if(!this._vName){
      this.logs.push(`Initial version is: ${name.trim()}`);
    }else{
      this.logs.push(`Version changed to:  ${name.trim()}`);
    }
    this._vName = name;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
