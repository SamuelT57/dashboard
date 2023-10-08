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
                    div {
                        font-family: Arial, sans-serif;
                    }

                    h2 {
                        color: #333;
                        font-size: 32px;
                        margin: 20px;
                    }

                    ul {
                        list-style: none;
                        padding: 0;
                    }

                    li {
                        margin: 20px;
                        border: 1px solid #ccc;
                        padding: 30px;
                    }

                    a {
                        text-decoration: none;
                        color: #333;
                        font-weight: bold;
                    }

                    img {
                        float: right;
                        max-width: 10%;
                        height: auto;
                        margin: auto;
                    }

                    p {
                        color: #666;
                    }
                `}</style>
            </div>
        )
    }
}

export default News