
import {get, post} from './common';

export const doLogin = (data: any) => post('/doLogin',data);
