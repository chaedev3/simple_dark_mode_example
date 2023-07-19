// /recoil/atoms.ts 
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist(); 

export const isDarkAtom = atom({
    //state 이름 
    key:"isDark",
    // 기본값(기본값은 라이트모드)
    default: false,
    effects_UNSTABLE: [persistAtom], 
})