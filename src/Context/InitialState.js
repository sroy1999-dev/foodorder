import { fetchUser } from "../Utils/fetchLocalStorageData"

const userInfo = fetchUser();

export const InitialState = {
    user: userInfo,
};

