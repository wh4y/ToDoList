import { FC, useRef } from "react";
import { Input } from "antd";
import styles from './styles/style.module.scss';
import { PlusOutlined } from "@ant-design/icons";

const Header: FC = () => {

    const inputElement = useRef<Input>(null);

    const handleClick = () => {
        console.log(inputElement.current!.state.value);
    }

    return (
        <div className={styles.main__header}>
            <Input
                className={styles.toDo__input}
                ref={inputElement}
                placeholder={'New toDo :)'}
            />
            <PlusOutlined
                className={styles.add__btn}
                onClick={handleClick}
                twoToneColor={'#1890ff'}
            />
        </div>
    );
}

export default Header;