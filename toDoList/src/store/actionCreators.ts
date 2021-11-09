import { v4 } from "uuid";
import { ItemType } from "./toDoReducer";


export interface AddItemAction {
    type: string,
    payload: ItemType,
}

export const addItem = (value: string): AddItemAction => {
    return {
        type: 'ADD_ITEM',
        payload: {
            id: v4(),
            value,
            date: new Date().toUTCString(),
        }
    }
}


export interface DeleteItemAction {
    type: string,
    payload: string,
}

export const deleteItem = (id: string): DeleteItemAction => {
    return {
        type: 'DELETE_ITEM',
        payload: id,
    }
}


export interface SetItemValue {
    type: string,
    payload: {
        value: string,
        id: string,
    }
}

export const setItemValue = (value: string, id: string): SetItemValue => {
    return {
        type: 'SET_ITEM_VALUE',
        payload: {
            value,
            id,
        }
    }
}