import React, { Component } from "react";
import { connect } from "react-redux";
import Layout1 from "../Layout/Layout1";
import styles from "./index.module.scss";
import homeOther from "./homeOther.png";
import SearchInput from "./components/SearchInput";
import NavMall from "./components/NavMall";
import { getHomeCarousel, getMallNav } from "../../action/homeAction";
import Carousel from "../../components/Carousel";

@connect(
    state => {
        return {
            data: state.home,
            user: state.user
        };
    },
    {
        getHomeCarousel,
        getMallNav
    }
)
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearchPage: false
        };
    }
    componentDidMount() {
        this.props.getHomeCarousel();
        this.props.getMallNav();
    }

    setShowSearchPage = val => {
        this.setState({
            showSearchPage: !!val
        })
    }
    render() {
        const { data, history, user } = this.props;
        const { homeCarousel, mallNav = [] } = data;
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
                        history={history}
                        setShowSearchPage={this.setShowSearchPage}
                        user={user}
                    />
                    <section className={styles.part1}>
                        <Carousel data={homeCarousel} />
                    </section>
                    <section className={styles.part2}>
                        <NavMall data={mallNav} />
                    </section>
                    <img src={homeOther} style={{ width: "100%" }} alt="" />
                </div>
            </Layout1>
        );
    }
}

export default Home;
