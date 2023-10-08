import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

const API_KEY = "056a648b6917157f3f13dcd3a6b19a29"

class Weather extends Component {
    state = {
        currently: 'loading',
        forecast: {}
    }

    componentDidMount() {
        const url =
            'https://api.openweathermap.org/data/2.5/weather'

        const success = (position) => {
            const { latitude, longitude } = position.coords
            fetch(` ${url}?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`)
                .then((res) => res.json())
                .then((forecast) => this.setState({ forecast, currently: 'success' }))
                .catch(() => this.setState({ currently: 'error' }))
        }

        const error = () => {
            alert('Unable to retrieve your location for weather')
        }

        navigator.geolocation.getCurrentPosition(success, error)
    }

    render() {
        const { currently, forecast } = this.state
        return (
            <div>
                <h2>Weather</h2>

                {currently === 'success' ? (
                    <>
                        <div className='stat'>
                            <p className='label'>Currently</p>
                            <p className='value'>{forecast.weather[0].main}</p>
                        </div>
                        <div className='stat'>
                            <p className='label'>Temperature</p>
                            <p className='value'>{forecast.main.temp} ºF</p>
                            <p>High temp: {forecast.main.temp_max} ºF</p>
                            <p>Low temp: {forecast.main.temp_min} ºF</p>

                        </div>

                        <p>
                            <span className='label'> City: </span>
                            {forecast.name}, {forecast.sys.country}
                        </p>
                    </>
                ) : currently === 'error' ? (
                    <p>There was an error: (</p>
                ) : (
                    <p>Loading...</p>
                )}


                <style jsx>{`
                    div {
                        font-family: Arial, sans-serif;
                    }

                    h2 {
                        font-size: 32px;
                    }

                    .stat {
                        margin-bottom: 20px;
                    }

                    .label {
                        font-weight: bold;
                    }

                    .value {
                        font-size: 18px;
                    }

                    p {
                        
                    }
                `}</style>
                
            </div>
        )
    }
}

export default Weather