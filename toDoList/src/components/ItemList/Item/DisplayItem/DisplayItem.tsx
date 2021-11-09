import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { FC } from "react";
import styles from "./styles/styles.module.scss";

interface IProps {
    value: string,
    handleModalOpen: () => void,
    handleDelete: (e: React.MouseEvent) => void,
    toDoStatus: string,
}

const DisplayItem: FC<IProps> = ({handleModalOpen, toDoStatus, handleDelete, value}) => {
    return (
        <div
            className={styles.item__wrapper}
            onClick={handleModalOpen}
        >
            <span className={styles.text}>{value}</span>
            <div className={styles.btn__holder}>
                {
                    toDoStatus === 'Done' ?
                        <CheckOutlined
                            className={styles.status__indicator}
                            style={{ color: 'green' }}
                        /> : null
                }
                <DeleteOutlined
                    className={styles.delete__btn}
                    onClick={handleDelete}
                />
            </div>
        </div>
    );
}

export default DisplayItem;