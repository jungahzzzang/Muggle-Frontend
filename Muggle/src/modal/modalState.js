import { atom } from "recoil";

const modalOption = key => ({key, default: false});

export const logoutModalState = atom(
    modalOption('logoutModalState'),
);

export const unRegisterCheckModalState = atom(
    modalOption('unRegisterCheckModalState'),
);