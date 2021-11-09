import { Typography } from "antd";
import { FC } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Item from "./Item/Item";
import styles from "./styles/styles.module.scss";

const { Text } = Typography;

const ItemList: FC = () => {

    const itemList = useSelector((state: RootState) => state.ItemList, shallowEqual);

    return (
        <div className={styles.list__wrapper}>
            {
                !itemList[0] ? <Typography><Text className={styles.no__toDo}>Add your first to Do :)</Text></Typography> :
                itemList.map((elem) => <Item {...elem} key={elem.id} />)
            }
        </div>
    );
}

export default ItemList;