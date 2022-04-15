import {datatype, lorem, image} from 'faker';

const makeFakeQuest = () => ({
  id: datatype.number(),
  title: lorem.word(),
  description: lorem.text(),
  previewImg: image.imageUrl(),
  coverImg: image.imageUrl(),
  type: lorem.word(),
  level: lorem.word(),
  peopleCount: [datatype.number(), datatype.number()],
  duration: datatype.number(),
});

const makeFakeOrder = () => ({
  name: lorem.word(),
  peopleCount: datatype.number(),
  phone: '1234567890',
  isLegal: true,
});

export {makeFakeQuest, makeFakeOrder}
