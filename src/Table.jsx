import React from 'react';

const Table = ({data}) => {
    return (
        <div>
{
    JSON.stringify(data) === '{}'
    ? ''
    : <div id="Sisyphus"> <table>
    <tr>
        <td> <p id='city'>City: {data.name}</p></td>
        <td> <p id='temperature'>{Math.floor(data.main.temp - 273)} C<sup>o</sup></p></td>
        <td> <p id='weather'>{data.weather[0].description}</p></td>
    </tr>
    </table>
    </div>
}
        </div>
    );
}

export default Table;
