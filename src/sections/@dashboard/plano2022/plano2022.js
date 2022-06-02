import "./plano2022.css";
import { useParams } from 'react-router-dom';

import { useState, useEffect } from "react";
import { baseurl } from "../../../lib/settings";
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";

function Plano2022() {
    const [title, setRespostas] = useState([]);
    const [dados, setDados] = useState([{}]);
    // const [counter, setCounter] = useState(0);

    const { id } = 1

    const getRespostas = async () => {
        baseurl.get('api/auth/plano/').then((resp) => {
            resp.data.map((resp) => {
                var data = [
                    {
                        titulo: resp.title,
                        Estradas_e_Pontes: resp.plano1,
                        Energia_Electrica: resp.plano2,
                        Agua: resp.plano3,
                        Saneamento: resp.plano4,
                        Transporte: resp.plano5,
                        Emprego: resp.plano6,
                        Habitacao: resp.plano7,
                        Outra: resp.plano8,
                    },
                ];

                setDados(data);
            });
            setRespostas(resp.data);
        });
    };

    useEffect(() => {
        getRespostas();
        // const interval = setInterval(() => {
        //     // setCounter((counter) => counter + 1);
        //     console.log("---Contador---")
        // }, 9000);
        // return () => {
        //     clearInterval(interval);
        //     if (counter === 4) {
        //         setCounter(0);
        //         console.log("---Contador---")
        //     }
        // };
    });
    // }, [counter]);

    return (
        <>
            {dados.map((da, index) => (
                <div className="Pergunta">
                    <h1 className="chart-heading">{da.titulo}</h1>
                </div>
            ))}

            <ResponsiveContainer width="100%" aspect={3}>
                <BarChart
                    width={400}
                    height={900}
                    data={dados}
                    barCategoryGap={100}

                >
                    <CartesianGrid strokeDasharray="2" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar width={550} dataKey="Estradas_e_Pontes" fill="#00AB55" />
                    <Bar width={350} dataKey="Energia_Electrica" fill="#ff0000" />
                    <Bar width={350} dataKey="Agua" fill="#00AB55" />
                    <Bar width={350} dataKey="Saneamento" fill="#c0c0c0" />
                    <Bar width={350} dataKey="Transporte" fill="#008080" />
                    <Bar width={350} dataKey="Emprego" fill="#8a2be2" />
                    <Bar width={350} dataKey="Habitacao" fill="#00AB55" />
                    <Bar width={350} dataKey="Outra" fill="#0055AB" />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default Plano2022;

