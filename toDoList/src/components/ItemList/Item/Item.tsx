import { DeleteOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { FC, useState } from "react";
import { ItemType } from "../../../store/toDoReducer";
import styles from "./styles/styles.module.scss";


const Item: FC<ItemType> = ({value, date}) => {

    const [isModalOpen, SetIsModalOpen] = useState(false);

    const toggleModalMode = () => {
        SetIsModalOpen(!isModalOpen);
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
                    onClick={e => e.stopPropagation()}
                />
            </div>
        </>
    );
}

export default Item;