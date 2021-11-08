import { DeleteOutlined } from "@ant-design/icons";
import { FC } from "react";
import styles from "./styles/styles.module.scss";


const Item: FC = () => {
    return (
        <div className={styles.item__wrapper}>
            <span className={styles.text}>TEXT</span>
            <DeleteOutlined className={styles.delete__btn} />
        </div>
    );
}

export default Item;