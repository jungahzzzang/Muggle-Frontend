import { atom } from "recoil";

/*
    Recoil
    -React의 상태 관리 라이브러리

    Atoms
    -상태의 단위이며 atom 함수를 사용해 생성한다.
    -고유한 키가 필요하며 키값은 전역적으로 고유해야 한다.
    -컴포넌트에서 atom을 읽고 쓰려면 useRecoilState라는 react hook을 사용해야 한다.
     useState와 비슷하지만 상태가 컴포넌트 간에 공유될 수 있다는 차이가 있다.
*/

export const memberTokenState = atom({
    key: "memberTokenState",
    default: "",
});

