import { atom } from 'recoil';

export const gameClear = atom<boolean>({
  key: 'gameClear',
  default: false,
});
