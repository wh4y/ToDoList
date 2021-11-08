import { FC } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Item from "./Item/Item";
import styles from "./styles/styles.module.scss";


const ItemList: FC = () => {

    const itemList = useSelector((state: RootState) => state.ItemList, shallowEqual);

    return (
        <div className={styles.list__wrapper}>
            {itemList.map((elem, id) => <Item {...elem} key={id} />)}
        </div>
    );
}

export default ItemList;