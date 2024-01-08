import { atom } from 'recoil';
import {Match} from "../types";

export const matchState = atom<Match | null>({
    key: 'matchState',
    default: null,
});