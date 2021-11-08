import { DeleteOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { FC, useState } from "react";
import styles from "./styles/styles.module.scss";


const Item: FC = () => {

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
                JOPA
            </Modal>

            <div
                className={styles.item__wrapper}
                onClick={toggleModalMode}
            >
                <span className={styles.text}>TEXT</span>
                <DeleteOutlined
                    className={styles.delete__btn}
                    onClick={e => e.stopPropagation()}
                />
            </div>
        </>
    );
}

export default Item;