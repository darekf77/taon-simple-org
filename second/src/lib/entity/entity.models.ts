import type { Entity } from './entity';
import { _ } from 'tnp-core/src';
//#region @websql
import {
  NumberColumn,
  PropsEntitySQL,
  QueryTable,
  StringColumn,
} from 'firedev-type-sql/src';
const entityTableName = _.snakeCase('entity').toUpperCase();
//#endregion

export type EntityNonColumnsKeys =
  | 'ctrl'
  | 'clone'
  | '__endpoint_context__'
  | 'inject'
  | 'clone'
  | '_';

export const EntityNonColumnsKeysArr = [
  'ctrl',
  'clone',
  'clone',
  '__endpoint_context__',
  'inject',
  '_',
] as EntityNonColumnsKeys[];

export type IEntity = Partial<Entity>;

export const defaultModelValuesEntity: Omit<IEntity, EntityNonColumnsKeys> = {
  description: 'Entity example description',
};

//#region @websql
export type IEntityTable = PropsEntitySQL<typeof defaultModelValuesEntity>;

export class EntityTable
  extends QueryTable<Entity, number>
  implements IEntityTable
{
  id = new NumberColumn(this, 'id');
  description = new StringColumn(this, 'description');
}

export const ENTITY = new EntityTable(entityTableName);
//#endregion
