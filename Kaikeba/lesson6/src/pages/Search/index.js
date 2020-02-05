import React, { Component } from "react";
import Layout1 from "../Layout/Layout1";
import LeftCatgories from "./components/LeftCatgories";
import RightCatogries from "./components/RightCatgories";
import { connect } from "react-redux";
import { getLeftCatgories, getRightCatgories } from "../../action/searchAction";
import "./index.scss";

@connect(
    state => {
        return {
            data: state.search
        };
    },
    {
        getLeftCatgories,
        getRightCatgories
    }
)
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    componentDidMount() {
        this.props.getLeftCatgories();
        this.props.getRightCatgories();
    }

    changeLeft = newActiveIndex => {
        this.setState(
            {
                activeIndex: newActiveIndex
            },
            () => {
                this.props.getRightCatgories();
            }
        );
    };

    render() {
        const { leftCatgories, rightCatgories } = this.props.data;
        const { activeIndex } = this.state;
        return (
            <Layout1
                title="京东商品分类 - 京东商城"
                topBarConfig={{ title: "商品分类" }}
                shortIcon="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png.webp"
            >
                <div className="search">
                    <LeftCatgories
                        data={leftCatgories}
                        activeIndex={activeIndex}
                        changeFirst={this.changeLeft}
                    />
                    <RightCatogries data={rightCatgories} />
                </div>
                
            </Layout1>
        );
    }
}

export default Search;
