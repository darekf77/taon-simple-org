//#region @browser
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiredevFullMaterialModule } from 'firedev-ui/src';
import { StaticColumnsModule } from 'static-columns/src';
import { EntityHelpers } from './entity.helpers';
import { Entity } from './entity';

@Component({
  selector: 'entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    // FiredevFullMaterialModule,
    // StaticColumnsModule,
  ],
})
export class EntityComponent {
  @Input() entity: Entity;
  ngOnInit() {
    EntityHelpers.helloWorldEntity();
  }

}
//#endregion
