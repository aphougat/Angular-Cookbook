import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  OnChanges, SimpleChanges
} from '@angular/core';
import { SocialCardType } from 'src/app/constants/social-card-type';
import { FbCardComponent } from '../fb-card/fb-card.component';
import { TwitterCardComponent } from '../twitter-card/twitter-card.component';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent implements OnInit, OnChanges {
  @Input() type: SocialCardType;
  cardTypes = SocialCardType;

  @ViewChild('vrf', {read: ViewContainerRef}) vrf: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const newVal = changes.type.currentValue;
    if(newVal !== undefined)
    {
      console.log(`card type changed to ${newVal}`);
      this.loadDynamicCard(newVal);
    }
  }

  loadDynamicCard = (cardNumber) =>{
    let component;
    switch (cardNumber){
      case SocialCardType.Facebook:
        component = FbCardComponent;
        break;
      case SocialCardType.Twitter:
        component = TwitterCardComponent;
        break;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.vrf.clear();
    this.vrf.createComponent(componentFactory);
  }

}
