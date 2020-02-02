import React from "react";
import styles from "./navMall.module.scss";

export default function NavMall(props) {
    const { data } = props;
    //console.log('props', props)
    return (
        <ul className={styles.navMall}>
            {data.map((item, index) => {
                return <Nav key={"nav" + index} data={item} />;
            })}
        </ul>
    );
}

function Nav(props) {
    console.log("TCL: 123456789123", props);
    const { icon, title, link } = props.data;
    return (
        <li className={styles.nav}>
            <a href={link}>
                <img className={styles.navIcon} src={icon} alt="" />
                <div className={styles.title}>{title}</div>
            </a>
        </li>
    );
}
