// THIS FILE IS GENERATED - DO NOT MODIFY
import { APP_ID, BUILD_BASE_HREF } from './lib/build-info._auto-generated_';
let isWebSQLMode: boolean = false;
//#region @backend
isWebSQLMode = false;
//#endregion
//#region @websqlOnly
isWebSQLMode = true;
//#endregion
const nodeENV = (() => {
    let env: any;
    //#region @backend
    env = process.env || {};
    //#endregion
    return env || {};
})();
const windowENV = (() => {
    let env: any;
    //#region @browser
    env = globalThis['ENV'] || {};
    //#endregion
    return env || {};
})();
const argsENV = (() => {
    let env: any;
    //#region @backend
    env = require('minimist')(process.argv);
    //#endregion
    return env || {};
})();
const transformURL = (url: string): string => {
    if (!url) {
        return url;
    }
    //#region @backend
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }
    return 'http://' + url; // by default backend is http
    //#endregion
    //#region @browser
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }
    return globalThis?.location?.protocol + '//' + url;
    //#endregion
};
const ACTIVE_CONTEXT: string | null = nodeENV['ACTIVE_CONTEXT'] || argsENV['ACTIVE_CONTEXT'] || windowENV['ACTIVE_CONTEXT'] || null;
/**
 * Your context backend port
 *
 */
export const HOST_BACKEND_PORT_1 = (nodeENV['HOST_BACKEND_PORT_1']) || (windowENV['HOST_BACKEND_PORT_1']) || (argsENV['HOST_BACKEND_PORT_1']) || 4118;
/**
 * Angular website url with normal/nodejs backend
 *
 */
export const FRONTEND_NORMAL_APP_PORT_1 = (nodeENV['FRONTEND_NORMAL_APP_PORT_1']) || (windowENV['FRONTEND_NORMAL_APP_PORT_1']) || (argsENV['FRONTEND_NORMAL_APP_PORT_1']) || 4270;
/**
 * @deprecated use FRONTEND_NORMAL_APP_PORT instead
*/
export const CLIENT_DEV_NORMAL_APP_PORT_1 = FRONTEND_NORMAL_APP_PORT_1;
/**
 * Angular website url with websql backend
 *
 */
export const FRONTEND_WEBSQL_APP_PORT_1 = (nodeENV['FRONTEND_WEBSQL_APP_PORT_1']) || (windowENV['FRONTEND_WEBSQL_APP_PORT_1']) || (argsENV['FRONTEND_WEBSQL_APP_PORT_1']) || 4269;
/**
 * @deprecated use FRONTEND_WEBSQL_APP_PORT instead
*/
export const CLIENT_DEV_WEBSQL_APP_PORT_1 = FRONTEND_WEBSQL_APP_PORT_1;
/**
 * Electron/angular website url for electron app purpose (ipc backend)
 */
export const FRONTEND_NORMAL_ELECTRON_PORT_1 = 4272;
// electron websql not supported yet
// export const FRONTEND_WEBSQL_ELECTRON_PORT_1 = undefined;
/**
 * Backend url - use as "host" inside your context
 *
 */
export const HOST_URL_1 = transformURL(nodeENV['HOST_URL_1']) || transformURL(windowENV['HOST_URL_1']) || transformURL(argsENV['HOST_URL_1']) || ('http://localhost:' + HOST_BACKEND_PORT_1);
/**
 * Frontend host url - use as "frontendHost" inside your context
 *
 */
export const FRONTEND_HOST_URL_1 = transformURL(nodeENV['FRONTEND_HOST_URL_1']) || transformURL(windowENV['FRONTEND_HOST_URL_1']) || transformURL(argsENV['FRONTEND_HOST_URL_1']) || ('http://localhost:' +
    (isWebSQLMode ? FRONTEND_WEBSQL_APP_PORT_1 : FRONTEND_NORMAL_APP_PORT_1));
/**
 * Frontend electron host url - use in app.electron.ts with win.loadURL(FRONTEND_HOST_URL_ELECTRON);
 */
export const FRONTEND_HOST_URL_ELECTRON_1 = 'http://localhost:' + FRONTEND_NORMAL_ELECTRON_PORT_1;
// electron websql not supported yet
// export const FRONTEND_HOST_URL_ELECTRON_1 =
//  'http://localhost:' +
//  (isWebSQLMode ? FRONTEND_WEBSQL_ELECTRON_PORT_1 : FRONTEND_NORMAL_ELECTRON_PORT_1);
/**
 * Your context backend port
 * @deprecated use HOST_BACKEND_PORT_n instead
 */
export const HOST_BACKEND_PORT = (nodeENV['HOST_BACKEND_PORT']) || (windowENV['HOST_BACKEND_PORT']) || (argsENV['HOST_BACKEND_PORT']) || HOST_BACKEND_PORT_1;
/**
 * Angular website url with normal/nodejs backend
 * @deprecated use FRONTEND_NORMAL_APP_PORT_n instead
 */
export const FRONTEND_NORMAL_APP_PORT = (nodeENV['FRONTEND_NORMAL_APP_PORT']) || (windowENV['FRONTEND_NORMAL_APP_PORT']) || (argsENV['FRONTEND_NORMAL_APP_PORT']) || FRONTEND_NORMAL_APP_PORT_1;
/**
 * @deprecated use FRONTEND_NORMAL_APP_PORT instead
*/
export const CLIENT_DEV_NORMAL_APP_PORT = FRONTEND_NORMAL_APP_PORT;
/**
 * Angular website url with websql backend
 * @deprecated use FRONTEND_WEBSQL_APP_PORT_n instead
 */
export const FRONTEND_WEBSQL_APP_PORT = (nodeENV['FRONTEND_WEBSQL_APP_PORT']) || (windowENV['FRONTEND_WEBSQL_APP_PORT']) || (argsENV['FRONTEND_WEBSQL_APP_PORT']) || FRONTEND_WEBSQL_APP_PORT_1;
/**
 * @deprecated use FRONTEND_WEBSQL_APP_PORT instead
*/
export const CLIENT_DEV_WEBSQL_APP_PORT = FRONTEND_WEBSQL_APP_PORT;
/**
 * Electron/angular website url for electron app purpose (ipc backend)
 */
export const FRONTEND_NORMAL_ELECTRON_PORT = FRONTEND_NORMAL_ELECTRON_PORT_1;
// electron websql not supported yet
// export const FRONTEND_WEBSQL_ELECTRON_PORT = FRONTEND_WEBSQL_ELECTRON_PORT_1;
/**
 * Backend url - use as "host" inside your context
 * @deprecated use HOST_URL_n instead
 */
export const HOST_URL = transformURL(nodeENV['HOST_URL']) || transformURL(windowENV['HOST_URL']) || transformURL(argsENV['HOST_URL']) || ('http://localhost:' + HOST_BACKEND_PORT);
/**
 * Frontend host url - use as "frontendHost" inside your context
 * @deprecated use FRONTEND_HOST_URL_n instead
 */
export const FRONTEND_HOST_URL = transformURL(nodeENV['FRONTEND_HOST_URL']) || transformURL(windowENV['FRONTEND_HOST_URL']) || transformURL(argsENV['FRONTEND_HOST_URL']) || ('http://localhost:' +
    (isWebSQLMode ? FRONTEND_WEBSQL_APP_PORT : FRONTEND_NORMAL_APP_PORT));
/**
 * Frontend electron host url - use in app.electron.ts with win.loadURL(FRONTEND_HOST_URL_ELECTRON);
 */
export const FRONTEND_HOST_URL_ELECTRON = 'http://localhost:' + FRONTEND_NORMAL_ELECTRON_PORT;
// electron websql not supported yet
// export const FRONTEND_HOST_URL_ELECTRON =
//  'http://localhost:' +
//  (isWebSQLMode ? FRONTEND_WEBSQL_ELECTRON_PORT : FRONTEND_NORMAL_ELECTRON_PORT);
export const HOST_CONFIG = {
    /** Relative file path for context */
    //'app.ts' 
    /** Name of context (var, let, const variable) inside *.ts file. */
    'MainContext': {
        activeContext: ACTIVE_CONTEXT,
        contextName: 'MainContext',
        hostPortNumber: Number(HOST_BACKEND_PORT_1),
        host: HOST_URL_1 + BUILD_BASE_HREF,
        frontendHostPortNumber: Number(FRONTEND_NORMAL_APP_PORT_1),
        frontendHost: FRONTEND_HOST_URL_1 + BUILD_BASE_HREF,
        appId: APP_ID,
    }
};
// THIS FILE IS GENERATED - DO NOT MODIFY
