import {createModalHook} from "./createModalHook"
import { logoutModalState, unRegisterCheckModalState } from "./modalState";

export const useLogoutModal = createModalHook(logoutModalState);

export const useUnRegisterCheckModal = createModalHook(unRegisterCheckModalState);