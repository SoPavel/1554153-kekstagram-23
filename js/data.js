
import {getRandomInRange, getRandomArrayElement} from './util.js';

const usersNames= ['Raul', 'Ivan', 'Olga', 'Alejandro', 'Iris', 'Marc', 'Hector'];

const messagePage = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'];

const descriptionPhoto = ['picnic in the parc', 'journey to the east', 'climbing to the mountain'];

const comment = () => ({
  id: getRandomInteger(1, 200),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: commentMessages[getRandomInteger(0, commentMessages.length - 1)],
  name: nameMessages[getRandomInteger(0, nameMessages.length - 1)],
})

const randomComment = () => ({
  id: getRandomInteger(1, 150),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: messagePage[getRandomInteger(0, messagePage.length - 1)],
  name: usersNames[getRandomInteger(0, usersNames.length - 1)],
})

const randomPhoto = () => ({
  id: getRandomInteger(1, 25),
  url: `photo/${getRandomInteger(1, 25)}.jpg`,
  description: descriptionPhoto[getRandomInteger(0, descriptionPhoto.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: [...new Array(getRandomInteger(1, 2))].map(() => comment()),
})

const galleryArray = [...new Array( arrayLength: 25)].map(() => photo());
console.log(galleryAray);



