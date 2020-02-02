import React, { Component } from "react";
import Layout1 from "../Layout/Layout1";
import styles from "./index.module.scss";
import homeOther from "./homeOther.png";
import SearchInput from "./components/SearchInput";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearchPage: false
        };
    }

    render() {
        const { showSearchPage } = this.state;
        return (
            <Layout1
                title="多快好省, 购物上京东！"
                style={showSearchPage ? { height: "100vh", overflow: "hidden" } : {}}
                shortIcon="//m.jd.com/favicon.ico"
            >
                <div className={styles.home}>
                    <SearchInput
                        showSearchPage={showSearchPage}
                    />
                    {/* <section className={styles.part1}></section> */}
                    <img src={homeOther} style={{ width: "100%" }} />
                </div>
            </Layout1>
        );
    }
}

export default Home;
