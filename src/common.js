const { TranslatedLevel, IncomingLevel, Types } = require("consts");

const translateLevel = (type) => {
  switch (type) {
    case IncomingLevel.Easy:
      return TranslatedLevel.Easy;
    case IncomingLevel.Medium:
      return TranslatedLevel.Medium;
    case IncomingLevel.Hard:
      return TranslatedLevel.Hard;
    default: return TranslatedLevel.Easy;
  }
};

const filterQuests = (quests, type ) => {
  switch (type) {
    case Types.ADVENTURES.type:
      return quests.filter((quest) => quest.type ===  Types.ADVENTURES.type);
    case Types.DETECTIVE.type:
      return quests.filter((quest) => quest.type ===  Types.DETECTIVE.type);
    case Types.HORROR.type:
      return quests.filter((quest) => quest.type ===  Types.HORROR.type);
    case Types.MYSTIC.type:
      return quests.filter((quest) => quest.type ===  Types.MYSTIC.type);
    case Types.SCI_FI.type:
      return quests.filter((quest) => quest.type ===  Types.SCI_FI.type);
    default:
      return quests;
  }
};

export {translateLevel, filterQuests}
