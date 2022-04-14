import {NameSpace} from '../../consts';

const loadQuests = (state) => state[NameSpace.Data].quests;
const loadQuest = (state) => state[NameSpace.Data].quest;
const getLoadedStatus = (state) => state[NameSpace.Data].isLoaded;

export {loadQuests, loadQuest, getLoadedStatus};
