import { createReducer } from "@reduxjs/toolkit";
import { addItem, AddItemAction } from "./actionCreators";


export interface ItemType {
    value: string,
    date: string,
}

interface InitialState {
    ItemList: Array<ItemType>,
}

const initialState: InitialState = {
    ItemList: []
}

export const reducer = createReducer(
    initialState,
    {
        ['ADD_ITEM']: (state, action: AddItemAction) => {
            state.ItemList.unshift(action.payload);
        }
    }
);