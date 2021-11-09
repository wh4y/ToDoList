import { DeleteOutlined } from "@ant-design/icons";
import { Input, Modal } from "antd";
import { FC, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem, setItemValue } from "../../../store/actionCreators";
import { AppDispatch } from "../../../store/store";
import { ItemType } from "../../../store/toDoReducer";
import styles from "./styles/styles.module.scss";


const Item: FC<ItemType> = ({ value, date, id }) => {

    const [inputValue, setInputValue] = useState(value);

    const [isModalOpen, SetIsModalOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    const toggleModalMode = () => {
        SetIsModalOpen(!isModalOpen);
    }

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(deleteItem(id));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handeBlur = () => {
        setInputValue(value);
    }

    const handleEdit = () => {
        dispatch(setItemValue(inputValue, id));
        toggleModalMode();
    }


    return (
        <>
            <Modal
                visible={isModalOpen}
                onCancel={toggleModalMode}
                footer={null}
            >
                <Input
                    onBlur={handeBlur}
                    onChange={handleChange}
                    allowClear
                    style={{ margin: '30px 0' }}
                    defaultValue={inputValue}
                    onPressEnter={handleEdit}
                />
                <label style={{ fontWeight: 600 }}>Added: </label><span>{date}</span>
            </Modal>

            <div
                className={styles.item__wrapper}
                onClick={toggleModalMode}
            >
                <span className={styles.text}>{value}</span>
                <DeleteOutlined
                    className={styles.delete__btn}
                    onClick={handleDelete}
                />
            </div>
        </>
    );
}

export default Item;