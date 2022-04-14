import {NameSpace} from '../../consts';

const getType = (state) => state[NameSpace.User].type;
const getMenu = (state) => state[NameSpace.User].currentMenu;

export {getType, getMenu};
