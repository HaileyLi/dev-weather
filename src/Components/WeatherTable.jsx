import React from 'react';

class WeatherTable extends React.Component {
    render() {
        return (
            <React.Fragment>
                <table border="1">
                    <tbody>
                        <tr>
                            <td>City</td>
                            <td>{this.props.weather.name}</td>
                        </tr>
                        <tr>
                            <td>Updated time</td>
                            <td>{new Date().toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>Weather</td>
                            <td>{this.props.weather.weather[0].main}</td>
                        </tr>
                        <tr>
                            <td>Temperature</td>
                            <td>{this.props.weather.main.temp}°C</td>
                        </tr>
                        <tr>
                            <td>Wind</td>
                            <td>{this.props.weather.wind.speed}M/S</td>
                        </tr>
                    </tbody>

                </table>
            </React.Fragment>

        );
    }
};

export default WeatherTable;
