import { FC } from "react";
import { Input } from "antd";
import styles from './styles/style.module.scss';
import { PlusOutlined } from "@ant-design/icons";

const Header: FC = () => {
    return (
        <div className={styles.main__header}>
            <Input
                className={styles.toDo__input}
                placeholder={'New toDo :)'}
            />
            <PlusOutlined
                className={styles.add__btn}
                onClick={() => console.log('jopa')}
                twoToneColor={'#1890ff'}
            />
        </div>
    );
}

export default Header;