import React from 'react'
import Weather from './components/weather'
import News from './components/news'

export default () => (
  <div>
    <h1><strong>Welcome!</strong></h1>
    <p>
      Hello, it’s {new Date().toLocaleDateString('en-us', { weekday: 'long' })}
      {'. '}
      You’re doing great.
    </p>
    <Weather />
    <News />
    <footer>
      Powered by <a href="https://newsapi.org/">NewsAPI</a> and {' '}
      <a href="https://openweathermap.org">Open Weather API</a>
    </footer>
  </div>
)
