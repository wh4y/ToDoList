import { FC, useRef } from "react";
import { Input } from "antd";
import styles from './styles/style.module.scss';
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/actionCreators";
import { AppDispatch } from "../../store/store";


const Header: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const inputElement = useRef<Input>(null);

    const handleAdd = () => {
        const value = inputElement.current!.state.value;
        if(!value) return;
        dispatch(addItem(value));
        inputElement.current!.setValue('');
    }

    return (
        <div className={styles.main__header}>
            <Input
                className={styles.toDo__input}
                ref={inputElement}
                onPressEnter={handleAdd}
                placeholder={'New toDo :)'}
            />
            <PlusOutlined
                className={styles.add__btn}
                onClick={handleAdd}
                twoToneColor={'#1890ff'}
            />
        </div>
    );
}

export default Header;