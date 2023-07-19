import React, {useState, useEffect} from 'react';
import {
    XYPlot,
    LineSeries,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis
} from 'react-vis';
import {useTranslation} from 'react-i18next';
import './benchmark.css';

export const Benchmark = () => {
    const [cpuScore,
        setCpuScore] = useState(0);
    const [gpuScore,
        setGpuScore] = useState(0);
    const [benchmarkRunning,
        setBenchmarkRunning] = useState(false);
    const [timer,
        setTimer] = useState(0);
    const [cpuData,
        setCpuData] = useState([]);
    const [gpuData,
        setGpuData] = useState([]);
    const {t} = useTranslation();

    useEffect(() => {
        let interval;

        if (benchmarkRunning) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [benchmarkRunning]);

    const runCpuBenchmark = () => {
        if (benchmarkRunning) 
            return;
        
        setBenchmarkRunning(true);
        setTimer(0);
        setCpuData([]);

        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            const score = Math.floor(Math.random() * 100);
            setCpuScore(score);
            setBenchmarkRunning(false);
            setCpuData([
                ...cpuData, {
                    x: cpuData.length + 1,
                    y: score
                }
            ]);
        }, 2000);
    };

    const runGpuBenchmark = () => {
        if (benchmarkRunning) 
            return;
        
        setBenchmarkRunning(true);
        setTimer(0);
        setGpuData([]);

        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            const score = Math.floor(Math.random() * 100);
            setGpuScore(score);
            setBenchmarkRunning(false);
            setGpuData([
                ...gpuData, {
                    x: gpuData.length + 1,
                    y: score
                }
            ]);
        }, 2000);
    };

    return (
        <div className="container">
            <h2>{t("benchmarkTitle")}</h2>
            <h2>{t("benchmarkSubtitle")}</h2>
            <div>
                <button
                    onClick={() => {
                    runCpuBenchmark();
                    runGpuBenchmark();
                }}
                    disabled={benchmarkRunning}>
                    {t("startBenchmarkButton")}
                </button>
                <p>{t("timeDesc")} {timer}
                    {t("seconds")}</p>
                <h3>{t("cpuBenchmark")}</h3>
                <button onClick={runCpuBenchmark} disabled={benchmarkRunning}>
                    {benchmarkRunning
                        ? 'Running...'
                        : 'Run Benchmark'}
                </button>
                <p>{t("cpuScore")} {cpuScore}</p>
            </div>
            <div>
                <h3>{t("gpuBenchmark")}</h3>
                <button onClick={runGpuBenchmark} disabled={benchmarkRunning}>
                    {benchmarkRunning
                        ? 'Running...'
                        : 'Run Benchmark'}
                </button>
                <p>{t("gpuScore")} {gpuScore}</p>
            </div>
            <div>
                <XYPlot
                    width={400}
                    height={300}
                    style={{
                    background: 'white'
                }}>
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <XAxis title="Run"/>
                    <YAxis title="Score"/>
                    <LineSeries data={cpuData} color="blue"/>
                    <LineSeries data={gpuData} color="green"/>
                </XYPlot>
            </div>
        </div>
    );
};
