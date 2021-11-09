import { FC } from "react";
import styles from "./styles/styles.module.scss";
import { MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { Progress } from "antd";


export interface IProgressBarProps {
    progressStatus: number,
    setProgressStatus: React.Dispatch<React.SetStateAction<number>>,
    setToDoStatus: React.Dispatch<React.SetStateAction<string>>,
}

const ProgressBar: FC<IProgressBarProps> = ({progressStatus, setProgressStatus, setToDoStatus}) => {

    const progressUp = () => {
        if (progressStatus !== 100) setProgressStatus(progressStatus + 5);
        if (progressStatus < 100) setToDoStatus('In progress');
        if (progressStatus + 5 === 100) setToDoStatus('Done');
    }

    const progressDown = () => {
        if (progressStatus !== 0) setProgressStatus(progressStatus - 5)
        if (progressStatus - 5 < 100) setToDoStatus('In progress');
        if (progressStatus - 5 === 0) setToDoStatus('Not started');
    }

    return (
        <div className={styles.progress__wrapper}>
            <div className={styles.progress__circle__wrapper}>
                <Progress
                    width={100}
                    className={styles.progress__circle}
                    type={'circle'}
                    percent={progressStatus}
                />
            </div>
            <div className={styles.progress__tools}>
                <PlusSquareOutlined className={styles.progress__btn} onClick={progressUp} />
                <MinusSquareOutlined className={styles.progress__btn} onClick={progressDown} />
            </div>
        </div>
    );
}

export default ProgressBar;