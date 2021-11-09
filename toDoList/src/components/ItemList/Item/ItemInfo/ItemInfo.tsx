import { FC } from "react";
import styles from "./styles/styles.module.scss";


export interface IItemInfoProps {
    date: string,
    id: string,
    toDoStatus: string,
}

const ItemInfo: FC<IItemInfoProps> = ({ date, id, toDoStatus }) => {
    return (
        <div className={styles.info__holder}>
            <span>
                <label style={{ fontWeight: 600, userSelect: 'none' }}>Added: </label><span>{date}</span>
            </span>
            <span>
                <label style={{ fontWeight: 600, userSelect: 'none' }}>UUID: </label><span>{id}</span>
            </span>
            <span>
                <label style={{ fontWeight: 600, userSelect: 'none' }}>Status: </label><span>{toDoStatus}</span>
            </span>
        </div>
    );
}

export default ItemInfo;