import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import LeftNav from './components/LeftNav'
import BreadCrumb from './components/BreadCrumb'
import connect from './modules/connect'
const { Header, Content, Footer, Sider } = Layout;

class Admin extends React.Component {
    state = {
        collapsed: false,
    };
    componentDidMount() {
        if (!this.props.commons.menu_config) {
            this.props.commons_actions.get_menu_config()
        }
    }
    onCollapse = collapsed => {
        // console.log(collapsed); // true or false
        this.setState({ collapsed });
    };

    render() {
        let { menu_config } = this.props.commons
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <LeftNav menu_config={menu_config} />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <BreadCrumb />

                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Antd Demo ©2020 Created by Jxiang</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default connect(Admin, 'commons')