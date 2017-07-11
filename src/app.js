import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'

// actions
import {inc, dec, zero} from './actions/countActions'
import {getBooks, addBook, deleteBook, updateTitle} from './actions/booksActions'

// components
const app = document.querySelector('#app')
import BookList from './components/BookList'
import Menu from './components/menu'
import Footer from './components/footer'

const store = createStore(reducer)

// store.subscribe(() => {
//     console.log('Store: ', store.getState())
// })

ReactDom.render(
    <Provider store={store}>
       <div>
            <Menu />
            <BookList />
            <Footer />
       </div>
    </Provider>,
    app
)

