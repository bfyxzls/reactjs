## vs code js 代码格式化
esLint + prettier 不要装js-beautify
然后设置 "prettier.eslintIntegration": true

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## 知识点

### props

参考：https://segmentfault.com/a/1190000011184076
React的核心思想就是组件化思想，页面会被切分成一些独立的、可复用的组件。
组件从概念上看就是一个函数，可以接受一个参数作为输入值，这个参数就是`props`，所以可以把`props`理解为从外部传入组件内部的数据。由于React是单向数据流，所以`props`基本上也就是从服父级组件向子组件传递的数据。

#### 用法

假设我们现在需要实现一个列表，根据React组件化思想，我们可以把列表中的行当做一个组件，也就是有这样两个组件：<ItemList/>和<Item/>。
先看看<ItemList/>
```
import Item from "./item";
export default class ItemList extends React.Component{
  const itemList = data.map(item => <Item item=item />);
  render(){
    return (
      {itemList}
    )
  }
}
```
列表的数据我们就暂时先假设是放在一个data变量中，然后通过map函数返回一个每一项都是<Item item='数据'/>的数组，也就是说这里其实包含了data.length个<Item/>组件，数据通过在组件上自定义一个参数传递。当然，这里想传递几个自定义参数都可以。

在<Item />中是这样的：
```
export default class Item extends React.Component{
  render(){
    return (
      <li>{this.props.item}</li>
    )
  }
}
```
在render函数中可以看出，组件内部是使用this.props来获取传递到该组件的所有数据，它是一个对象，包含了所有你对这个组件的配置，现在只包含了一个item属性，所以通过this.props.item来获取即可。

#### defaultProps

在组件中，我们最好为props中的参数设置一个defaultProps，并且制定它的类型。比如，这样：
```
Item.defaultProps = {
  item: 'Hello Props',
};

Item.propTypes = {
  item: PropTypes.string,
};
```
关于propTypes，可以声明为以下几种类型：
```
optionalArray: PropTypes.array,
optionalBool: PropTypes.bool,
optionalFunc: PropTypes.func,
optionalNumber: PropTypes.number,
optionalObject: PropTypes.object,
optionalString: PropTypes.string,
optionalSymbol: PropTypes.symbol,

```


### state

一个组件的显示形态可以由数据状态和外部参数所决定，外部参数也就是props，而数据状态就是state。
```
export default class ItemList extends React.Component{
  constructor(){
    super();
    this.state = {
      itemList:'一些数据',
    }
  }
  render(){
    return (
      {this.state.itemList}
    )
  }
}
```
> 首先，在组件初始化的时候，通过this.state给组件设定一个初始的state，在第一次render的时候就会用这个数据来渲染组件。

#### setState
state不同于props的一点是，state是可以被改变的。不过，不可以直接通过this.state=的方式来修改，而需要通过this.setState()方法来修改state。
比如，我们经常会通过异步操作来获取数据，我们需要在didMount阶段来执行异步操作：
```
componentDidMount(){
  fetch('url')
    .then(response => response.json())
    .then((data) => {
      this.setState({itemList:item});  
    }
}
```
当数据获取完成后，通过this.setState来修改数据状态。
当我们调用this.setState方法时，React会更新组件的数据状态state，并且重新调用render方法，也就是会对组件进行重新渲染。
> 注意：通过this.state=来初始化state，使用this.setState来修改state，constructor是唯一能够初始化的地方。

### prop和state的区别

1. state是组件自己管理数据，控制自己的状态，可变；
2. props是外部传入的数据参数，不可变；
3. 没有state的叫做无状态组件，有state的叫做有状态组件；
4. 多用props，少用state。也就是多写无状态组件。