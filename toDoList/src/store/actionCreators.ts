import { createAction } from "@reduxjs/toolkit";
import { ItemType } from "./toDoReducer";


export interface AddItemAction {
    type: string,
    payload: ItemType,
}

export const addItem = (value: string): AddItemAction => {
    return {
        type: 'ADD_ITEM',
        payload: {
            value,
            date: new Date().toUTCString(),
        }
    }
}

