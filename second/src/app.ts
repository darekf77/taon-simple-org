//#region imports
import { Taon, TaonBaseContext } from 'taon';
import { Observable, map } from 'rxjs';
import { HOST_BACKEND_PORT } from './app.hosts';
//#region @browser
import { NgModule, inject, Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion
//#endregion

console.log('hello world');
console.log('Your server will start on port ' + HOST_BACKEND_PORT);
const host = 'http://localhost:' + HOST_BACKEND_PORT;

//#region second component
//#region @browser
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
export class SecondComponent {
  userApiService = inject(UserApiService);
  readonly users$: Observable<User[]> = this.userApiService.getAll();
}
//#endregion
//#endregion

//#region  second api service
//#region @browser
@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  userControlller = Taon.inject(() => MainContext.get(UserController));
  getAll() {
    return this.userControlller
      .getAll()
      .received.observable.pipe(map(r => r.body.json));
  }
}
//#endregion
//#endregion

//#region  second module
//#region @browser
@NgModule({
  exports: [SecondComponent],
  imports: [CommonModule],
  declarations: [SecondComponent],
})
export class SecondModule {}
//#endregion
//#endregion

//#region  second entity
@Taon.Entity({ className: 'User' })
class User extends Taon.Base.AbstractEntity {
  public static ctrl?: UserController;
  //#region @websql
  @Taon.Orm.Column.String()
  //#endregion
  name?: string;
}
//#endregion

//#region  second controller
@Taon.Controller({ className: 'UserController' })
class UserController extends Taon.Base.CrudController<User> {
  entityClassResolveFn = () => User;
  //#region @websql
  async initExampleDbData(): Promise<void> {
    const superAdmin = new User();
    superAdmin.name = 'super-admin';
    await this.db.save(superAdmin);
  }
  //#endregion
}
//#endregion

//#region  second context
const MainContext = Taon.createContext(() => ({
  host,
  contextName: 'MainContext',
  contexts: { TaonBaseContext },
  controllers: {
    UserController,
    // PUT FIREDEV CONTORLLERS HERE
  },
  entities: {
    User,
    // PUT FIREDEV ENTITIES HERE
  },
  database: true,
  disabledRealtime: true,
}));
//#endregion

async function start() {
  await MainContext.initialize();

  if (Taon.isBrowser) {
    const users = (
      await MainContext.getClassInstance(UserController).getAll().received
    ).body?.json;
    console.log({
      'users from backend': users,
    });
  }
}

export default start;
