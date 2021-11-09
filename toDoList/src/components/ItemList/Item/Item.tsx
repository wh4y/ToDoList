import { Button, Input, Modal } from "antd";
import { FC, useState } from "react";
import { ItemType } from "../../../store/toDoReducer";
import DisplayItem from "./DisplayItem/DisplayItem";
import useItem from "./hooks/useItem/useItem";
import ModalBody from "./ModalBody/ModalBody";


const Item: FC<ItemType> = ({ value, date, id }) => {

    const handleModalOpen = () => {
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    const {
        handleEdit, handleChange, handleDelete,
        toDoStatus, inputValue, progressStatus,
        setToDoStatus, setInputValue, setProgressStatus
    } = useItem(value, id, handleModalClose);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalCancel = () => {
        setInputValue(value);
        handleModalClose();
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
                <ModalBody
                    id={id}
                    date={date}
                    toDoStatus={toDoStatus}
                    progressStatus={progressStatus}
                    setProgressStatus={setProgressStatus}
                    setToDoStatus={setToDoStatus}
                />
            </Modal>

            <DisplayItem
                value={value}
                handleModalOpen={handleModalOpen}
                handleDelete={handleDelete}
                toDoStatus={toDoStatus}
            />
        </>
    );
}

export default Item;