import { CheckOutlined, DeleteOutlined, MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Progress } from "antd";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem, setItemValue } from "../../../store/actionCreators";
import { AppDispatch } from "../../../store/store";
import { ItemType } from "../../../store/toDoReducer";
import styles from "./styles/styles.module.scss";


const Item: FC<ItemType> = ({ value, date, id }) => {

    const [progressStatus, setProgressStatus] = useState<number>(0);
    const [toDoStatus, setToDoStatus] = useState('Not started');

    const [inputValue, setInputValue] = useState(value);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    const handleModalCancel = () => {
        setInputValue(value);
        handleModalClose();
    }

    const handleModalOpen = () => {
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(deleteItem(id));
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
    }

    const handleEdit = () => {
        dispatch(setItemValue(inputValue, id));
        handleModalClose();
    }

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
        <>
            <Modal
                visible={isModalOpen}
                onCancel={handleModalCancel}
                bodyStyle={{ display: 'flex', flexDirection: 'column' }}
                footer={[
                    <Button onClick={handleEdit}>
                        Confirm
                    </Button>
                ]}
            >
                <Input.TextArea
                    autoSize={{ minRows: 1, maxRows: 10 }}
                    onChange={handleChange}
                    allowClear
                    style={{ margin: '30px 0' }}
                    value={inputValue}
                    onPressEnter={handleEdit}
                />
                <div className={styles.modal__body}>
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
                </div>
            </Modal>

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
        </>
    );
}

export default Item;