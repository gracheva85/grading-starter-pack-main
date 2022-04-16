import { Levels } from "./consts";

const translateLevel = (type: string) => {
  switch (type) {
    case Levels.EASY.level:
      return Levels.EASY.name;
    case Levels.MEDIUM.level:
      return Levels.MEDIUM.name;
    default: return Levels.HARD.name;
  }
};

export {translateLevel}
