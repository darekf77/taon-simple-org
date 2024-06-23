//#region @notForNpm
import { Firedev } from 'firedev/src';
import { Observable, map } from 'rxjs';

import { HOST_BACKEND_PORT } from './app.hosts';
//#region @browser
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second',
  template: `hello from second<br />
    <br />
    users from backend
    <ul>
      <li *ngFor="let user of users$ | async">{{ user | json }}</li>
    </ul> `,
  styles: [
    `
      body {
        margin: 0px !important;
      }
    `,
  ],
})
export class SecondComponent implements OnInit {
  users$: Observable<User[]> = User.ctrl
    .getAll()
    .received.observable.pipe(map(data => data.body.json));

  constructor() {}
  ngOnInit() {}
}

@NgModule({
  imports: [CommonModule],
  exports: [SecondComponent],
  declarations: [SecondComponent],
  providers: [],
})
export class SecondModule {}
//#endregion

@Firedev.Entity({ className: 'User' })
class User extends Firedev.Base.Entity {
  public static ctrl?: UserController = Firedev.inject(
    () => SecondContext.types.controllers.UserController,
  );
  //#region @websql
  @Firedev.Orm.Column.Generated()
  //#endregion
  id?: string | number;
}

@Firedev.Controller({ className: 'UserController' })
class UserController extends Firedev.Base.CrudController<User> {
  entityClassResolveFn = () => SecondContext.types.entities.User;
  //#region @websql
  async initExampleDbData(): Promise<void> {
    await this.db.save(new SecondContext.types.entities.User());
  }
  //#endregion
}

const host = 'http://localhost:' + HOST_BACKEND_PORT;
console.log('host', host);

var SecondContext = Firedev.createContext(()=>({
  host,
  contextName: 'context',
  contexts: {
    BaseContext: Firedev.Base.Context,
  },
  controllers: {
    UserController,
    // PUT FIREDEV CONTORLLERS HERE
  },
  entities: {
    User,
    // PUT FIREDEV ENTITIES HERE
  },
  //#region @websql
  database: true,
  //#endregion
}));

async function start() {
  console.log('[second-app] hello world');
  console.log('[second-app] Your server will start on port ' + HOST_BACKEND_PORT);

  await SecondContext.initialize();

  if (Firedev.isBrowser) {
    const users = (
      await SecondContext.types.entities.User.ctrl.getAll().received
    ).body.json;
    console.log({
      'users from backend': users,
    });
  }
}

export default start;

//#endregion
