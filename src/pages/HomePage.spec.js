import chai from 'chai'
import cheerio from 'cheerio'
import { decodeHTML } from 'entities'
import React from 'react'
import ReactDOMServer from 'react/lib/ReactDOMServer'
import { Provider } from 'react-redux'
import HomePage from './HomePage'
import configureStore from '../store'

chai.should()

const store = configureStore()

describe('Home Page', () => {
  it('displays hello world', () => {
    //arrange
    const home = (
      <Provider store={store}>
          <HomePage/>
      </Provider>
    )
		//act
		const html = ReactDOMServer.renderToStaticMarkup(home)
		const $ = cheerio.load(html)
		const hello = decodeHTML($('h1').html())

		//assert
		hello.should.exist
  })
})
