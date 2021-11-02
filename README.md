## 客户端开发环境

1. `npx create-react-app ecommerce-front --template typescript`

2. 安装项目中所需要使用的依赖

   ```js
   npm install antd axios moment redux react-redux react-router-dom redux-saga connected-react-router redux-devtools-extension @types/react-redux @types/react-router-dom
   ```

3. antd css 使用cdn

4. 配置服务的请求api地址 .env环境变量文件中

   ```js
   REACT_APP_PRODUCTION_API_URL=http://fullstack.net.cn/api
   REACT_APP_DEVLOPMENT_API_URL=http://localhost/api
   ```

5. 添加config.ts 配置文件获取环境变量文件的 数据，统一导出

   ```tsx
   export let API: string
   
   if (process.env.NODE_ENV === "development") {
     API = process.env.REACT_APP_DEVLOPMENT_API_URL!
   } else {
     API = process.env.REACT_APP_PRODUCTION_API_URL!
   }
   ```

6. 安装chrom扩展

   1. React Developer Tools: 检查React组件层次结构，在页面上显示React组件。
   2. Redux DevTools: 监测 Store 中状态的变化

7. 初始化路由

   7.1 在src下新建`Routes.tsx`

   ```react
   <HashRouter>
     <Switch>
       <Route path="/" component={Home} exact></Route>
       <Route path="/shop" component={Shop}></Route>
     </Switch>
   </HashRouter>
   ```

   7.2  src/index.tsx中

   ```react
   ReactDOM.render(<Routes />, document.getElementById('root'))
   ```

8.  初始化store容器

   8.1  store/index.ts

   ```js
   import { createStore } from 'redux'
   import { rootReducer } from './reducers'
   
   export default createStore(rootReducer)
   ```

   8.2 store/reducers/index.ts

   ```js
   import { combineReducers } from 'redux'
   import testReducer from './test.reducer'
   
   export const rootReducer = combineReducers({
   	test: testReducer
   })
   
   export type RootState = ReturnType<typeof rootReducer>
   ```

   8.3 src/index.ts

   ```js
   import { Provider } from 'react-redux'
   import store from './store'
   ReactDOM.render(
   	<Provider store={store}>
   		<Routes />
   	</Provider>,
   	document.getElementById('root')
   )
   ```

   
