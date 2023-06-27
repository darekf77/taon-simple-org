import { Firedev } from 'firedev';
import { _ } from 'tnp-core';
import type { EntityController } from './entity.controller';
import {
  EntityNonColumnsKeys, EntityNonColumnsKeysArr,
} from './entity.models';
import {
  defaultModelValuesEntity as defaultModelValues
} from './entity.models';

@Firedev.Entity({
  className: 'Entity',
  defaultModelValues
})
export class Entity extends Firedev.Base.Entity<any> {

  //#region static
  static ctrl: EntityController;
  static from(obj: Omit<Partial<Entity>, EntityNonColumnsKeys>) {
    obj = _.merge(defaultModelValues, _.omit(obj, EntityNonColumnsKeysArr))
    return _.merge(new Entity(), obj) as Entity;
  }
  static getAll() {
    return this.ctrl.getAll();
  }
  static empty() {
    return Entity.from(defaultModelValues);
  }
  //#endregion

  //#region constructor
  private constructor(...args) { // @ts-ignore
    super(...args);
  }
  //#endregion

  //#region fields & getters
  ctrl: EntityController;

  //#region @websql
  @Firedev.Orm.Column.Generated()
  //#endregion
  id: string;

  //#region @websql
  @Firedev.Orm.Column.Custom({
    type: 'varchar',
    length: 100,
    default: defaultModelValues.description
  })
  //#endregion
  description?: string;
  //#endregion

  //#region methods
  clone(options?: { propsToOmit: (keyof Entity)[]; }): Entity {
    const { propsToOmit } = options || { propsToOmit: EntityNonColumnsKeysArr };
    return _.merge(new Entity(), _.omit(this, propsToOmit));
  }
  //#endregion

}