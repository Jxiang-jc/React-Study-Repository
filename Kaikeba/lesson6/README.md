#### React-classnames库
> 1.由于react原生动态添加多个className会报错. 
```js
import style from './style.css'
<div className={style.class1 style.class2}></div>
```

> 2.想要得到最终渲染的效果是
```js
<div class='class1 class2'></div>
```

> 3.引入classnames库，安装： 

`npm install classnames --save`

> 4.使用方法
```js
import classnames from 'classnames'
// 可以将后面的true省略，但这种是比较直观的，可以对传入的class进行比较明显的动态判断
<div className=classnames({
    'class1': true,
    'class2': true
    )>
</div>
```

#### 1.yarn install 2. yarn start

#### 1.在mock-serve中 yarn install 2. yarn start