import { DeleteOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import { FC, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem, setItemValue } from "../../../store/actionCreators";
import { AppDispatch } from "../../../store/store";
import { ItemType } from "../../../store/toDoReducer";
import styles from "./styles/styles.module.scss";


const Item: FC<ItemType> = ({ value, date, id }) => {

    const [inputValue, setInputValue] = useState(value);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    const handleModalCancel = () => {
        setInputValue(value);
        handleModalClose();
    }

    const handleModalOpen = () => {
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

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


    return (
        <>
            <Modal
                visible={isModalOpen}
                onCancel={handleModalCancel}
                footer={[
                    <Button onClick={handleEdit}>
                        Confirm
                    </Button>
                ]}
            >
                <Input.TextArea
                    autoSize
                    onChange={handleChange}
                    allowClear
                    style={{ margin: '30px 0' }}
                    value={inputValue}
                    onPressEnter={handleEdit}
                />
                <label style={{ fontWeight: 600 }}>Added: </label><span>{date}</span>
            </Modal>

            <div
                className={styles.item__wrapper}
                onClick={handleModalOpen}
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