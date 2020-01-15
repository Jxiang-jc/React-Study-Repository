import React from 'react';
import { withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;


class LeftNav extends React.Component {
    constructor(props) {
        super(props)
        this.renderMenuItem = this.renderMenuItem.bind(this)
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
    }
    state = {
        openKeys: ['sub0'],
        menu_config: []
    }

    // 代替componentWillReceiveProps
    static getDerivedStateFromProps(nextProps, prevState) {
        const { menu_config } = nextProps
        if (menu_config !== prevState.menu_config && menu_config) {
            let menu_arr = []
            menu_config.forEach(menuKey => {
                menu_arr.push(menuKey.key)
            })
            return {
                menu_config: menu_arr
            }
        }
        // 这里return相当于setState
        return null;
    }

    // 渲染菜单
    renderMenuItem() {
        let { menu_config } = this.props
        // 首次没有menu_config, 此时没必要渲染
        if (!menu_config) return ''

        return menu_config.map((menu, idx) => {
            if (menu.children && menu.children.length) {
                return (
                    <SubMenu key={menu.key}
                        title={
                            <span>
                                <Icon type="user" />
                                <span>{menu.title}</span>
                            </span>
                        }
                    >
                        {menu.children.map(item => (
                            <Menu.Item key={item.path}>{item.title}</Menu.Item>
                        ))}
                    </SubMenu>
                )
            }

            return (
                <Menu.Item key={menu.key}>
                    <Icon type="pie-chart" />
                    <span>{menu.title}</span>
                </Menu.Item>
            )
        })
    }

    // 处理切换菜单
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);

        if (this.state.menu_config.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    // 跳转路由
    handleMenuItemClick({ item, key, keyPath, domEvent }) {
        // console.log('...argument2', ...arguments)
        this.props.history.push(key)
    }
    render() {
        return (
            <div className="app-left-nav">
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['/']}
                    onClick={this.handleMenuItemClick}
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                >
                    {this.renderMenuItem()}
                </Menu>
            </div>

        )
    }
}

export default withRouter(LeftNav)