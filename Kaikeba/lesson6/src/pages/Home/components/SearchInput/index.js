import React from "react";
import { Link } from "react-router-dom";
import styles from "./searchInput.module.scss";
import classnames from "classnames";

function SearchInput(props) {
    const { showSearchPage, history } = props;
    const toSearchPage = () => {
        history.push('/productList')
    };
    return (
        <div className={styles.searchInput}>
            {showSearchPage ? (
                <div className={styles.iconBox}>
                    <i
                        className={classnames(styles.iconfont, "iconfont icon-jiantou-copy")}
                        onclick={() => {}}
                    ></i>
                </div>
            ) : (
                <Link to="/search" className={styles.iconIcon_}>
                    <i
                        className={classnames(
                            styles.iconfont,
                            styles.iconBox,
                            "iconfont icon-icon-"
                        )}
                    ></i>
                </Link>
            )}
            <div className={styles.inputBox}>
                <i
                    className={classnames(
                        styles.iconfont,
                        styles.iconSousuo,
                        "iconfont icon-sousuo"
                    )}
                ></i>
                <input placeholder="京东商城" onFocus={() => {}} />
            </div>
            {showSearchPage ? (
                <div className={styles.iconBox}>
                    <span className={styles.loginBtn} onClick={toSearchPage}>
                        搜索
                    </span>
                </div>
            ) : (
                <Link to="/user" className={styles.iconBox}>
                    {/* {isLogin ? (
                        <i className={classnames(styles.iconfont, "iconfont icon-wode")}></i>
                    ) : (
                        <span className={styles.loginBtn}>登录</span>
                    )} */}
                </Link>
            )}
            {showSearchPage && <div className={styles.searchPage}>更多搜索选择项</div>}
        </div>
    );
}

export default SearchInput;
