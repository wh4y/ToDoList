import { FC } from "react";
import ItemInfo, { IItemInfoProps } from "../ItemInfo/ItemInfo";
import ProgressBar, { IProgressBarProps } from "../ProgressBar/ProgressBar";
import styles from "./styles/styles.module.scss";


interface IModalBodyProps extends IItemInfoProps, IProgressBarProps { }

const ModalBody: FC<IModalBodyProps> = ({
    progressStatus,
    setProgressStatus,
    setToDoStatus,
    id,
    date,
    toDoStatus
}) => {
    return (
        <div className={styles.modal__body}>
            <ProgressBar
                progressStatus={progressStatus}
                setProgressStatus={setProgressStatus}
                setToDoStatus={setToDoStatus}
            />
            <ItemInfo
                id={id}
                date={date}
                toDoStatus={toDoStatus}
            />
        </div>
    );
}

export default ModalBody;