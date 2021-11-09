import { DeleteOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { Dispatch, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../../store/actionCreators";
import { AppDispatch } from "../../../store/store";
import { ItemType } from "../../../store/toDoReducer";
import styles from "./styles/styles.module.scss";


const Item: FC<ItemType> = ({ value, date, id }) => {

    const [isModalOpen, SetIsModalOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    const toggleModalMode = () => {
        SetIsModalOpen(!isModalOpen);
    }

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(deleteItem(id));
    }

    return (
        <>
            <Modal
                visible={isModalOpen}
                onCancel={toggleModalMode}
                footer={null}
            >
                <p>{value}</p>
                <p>{date}</p>
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