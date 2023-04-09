import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

const API_KEY = 'ef4a9d883eee4d2ba60cce0644ec93fa'

class News extends Component {
    state = {
        currently: 'loading',
        news: []
    }

    componentDidMount() {
        const url =
            'https://newsapi.org/v2/top-headlines?country=us&apiKey='

        fetch(url + API_KEY)
            .then((res) => res.json())
            .then((news) => this.setState({ news, currently: 'success' }))
            .catch(() => this.setState({ currently: 'error' }))
    }

    render() {
        const { currently, news } = this.state
        console.log(news)
        return (
            <div>
                <h2>News</h2>
                {currently === 'loading' ? (
                    <p>Loading…</p>
                ) : currently === 'error' ? (
                    <p>There was an error :(</p>
                ) : (
                    <ul>
                        {news.articles.map((article) => (
                            <li key={article.url}>
                                <a href={article.url}>{article.title}</a>
                                <img src={article.urlToImage}></img>
                                <p>{article.description}</p>
                            </li>
                        ))}
                    </ul>
                )}
                <style jsx>{`

                `}</style>
            </div>
        )
    }
}

export default News