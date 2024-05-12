import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface IData {
    temperature: number,
    humidity: number
}

function Teste() {

    const [data, setData] = useState<IData[]>([])


    const arduinoIP = '192.168.0.121'; // IP do Arduino na sua rede local
    const url = `http://${arduinoIP}`;

    // Enviar requisição POST para o Arduino
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log('Resposta do Arduino:', data);
        })
        .catch(error => {
            console.error('Erro ao enviar requisição:', error);
        });


    return (
        <div>{data.map((item) => {
            return (
                <div>
                    {item.humidity}
                    {item.temperature}
                </div>
            )
        })}</div>
    )
}

export default Teste