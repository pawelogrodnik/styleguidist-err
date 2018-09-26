import { createStore, compose, StoreEnhancer } from 'redux';
import rootReducer from './Reducers/_RootReducer';

const enhancers: StoreEnhancer = compose(window['devToolsExtension'] ? window['devToolsExtension']() : (f: Function) => f);

export const store = createStore(rootReducer, enhancers);
