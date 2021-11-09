import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem, setItemValue } from "../../../../../store/actionCreators";
import { AppDispatch } from "../../../../../store/store";


const useItem = (
    value: string,
    id: string,
    handleModalClose: () => void,
) => {

    const [progressStatus, setProgressStatus] = useState<number>(0);
    const [toDoStatus, setToDoStatus] = useState('Not started');
    const dispatch = useDispatch<AppDispatch>();
    const [inputValue, setInputValue] = useState(value);

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(deleteItem(id));
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
    }

    const handleEdit = () => {
        dispatch(setItemValue(inputValue, id));
        handleModalClose();
    }


    return {
        progressStatus,
        setProgressStatus,
        toDoStatus,
        setToDoStatus,

        inputValue,
        setInputValue,

        handleDelete,
        handleChange,
        handleEdit,
    };
}

export default useItem;