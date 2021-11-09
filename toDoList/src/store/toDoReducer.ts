import { createReducer } from "@reduxjs/toolkit";
import { AddItemAction, DeleteItemAction } from "./actionCreators";


export interface ItemType {
    id: string,
    value: string,
    date: string,
}

interface InitialState {
    ItemList: Array<ItemType>,
}

const initialState: InitialState = {
    ItemList: [],
}

export const reducer = createReducer(
    initialState,
    {
        ['ADD_ITEM']: (state, action: AddItemAction) => {
            state.ItemList.push(action.payload);
        },
        ['DELETE_ITEM']: (state, action: DeleteItemAction) => {
            state.ItemList = state.ItemList.filter(e => e.id !== action.payload);
        }
    }
);