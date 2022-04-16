import {NameSpace} from '../../consts';
import { State } from '../../types/state';

const getType = (state: State): string => state[NameSpace.User].type;
const getMenu = (state: State): string => state[NameSpace.User].currentMenu;

export {getType, getMenu};
