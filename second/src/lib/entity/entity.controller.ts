import { Firedev } from 'firedev/src';
import { Entity } from './entity';
import { _ } from 'tnp-core/src';
import {
  randUserName,
  randAddress,
} from '@ngneat/falso'; // faking data
import { IEntity } from './entity.models';
//#region @websql
import { ENTITY } from './entity.models';
//#endregion

@Firedev.Controller({
  className: 'EntityController'
})
export class EntityController extends Firedev.Base.CrudController<any> {
  entity = ()=> Entity;

  @Firedev.Http.GET()
  hello(): Firedev.Response<string> {
    //#region @websqlFunc
    return async () => {
      return 'Hello world';
    }
    //#endregion
  }

  @Firedev.Http.GET()
  getListOfAll(): Firedev.Response<Entity[]> {
    //#region @websqlFunc
    return async () => {
      const entites = await this.dbQuery
        .from(ENTITY)
        .select<Entity>(ENTITY.$all)
        ;
      return entites;
    }
    //#endregion
  }

  @Firedev.Http.POST()
  createTestObjecttEntity(
    @Firedev.Http.Param.Body('body') body: IEntity,
  ): Firedev.Response<Entity> {
    //#region @websqlFunc
    return async () => {
      let item = this.entity().from(body);
      item = await this.repository.save(item);
      return item;
    }
    //#endregion
  }

  @Firedev.Http.GET(`/${Firedev.symbols.CRUD_TABLE_MODELS}`) // @ts-ignore
  getAll(@Firedev.Http.Param.Query('limit') limit = Infinity): Firedev.Response<Entity[]> {
    //#region @websqlFunc
    const config = super.getAll();
    return async (req, res) => { // @ts-ignore
      let arr = await Firedev.getResponseValue(config, req, res) as Entity[];
      if (arr.length > limit) {
        arr = arr.slice(0, limit - 1);
      }
      return arr as any;
    }
    //#endregion
  }

  //#region @websql
  async initExampleDbData() {
    // const repo = this.connection.getRepository(Entity);
    // await repo.save(Entity.from({ description: 'hello world' }))
    // const all = await repo.find()
  }
  //#endregion

}
