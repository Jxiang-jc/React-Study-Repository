### 项目中遇到的问题

- withRouter
```js
// 高阶组件中的withRouter, 作用是将一个组件包裹进Route里面, 然后react-router的三个对象history, location, match就会被放进这个组件的props属性中.
// withRouter实现原理: 
// 将组件包裹进 Route, 然后返回
// const withRouter = () => {
//     return () => {
//         return <Route component={Nav} />
//     }
// }
// 这里是简化版
const withRouter = ( Component ) => () => <Route component={ Component }/>
```