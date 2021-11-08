import { FC } from "react";
import Item from "./Item/Item";
import styles from "./styles/styles.module.scss";

const ItemList: FC = () => {
    return (
        <div className={styles.list__wrapper}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
}

export default ItemList;