import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    const marksArray = [
        { id: 1, name: "Alice", phiy: 90, chemistry: 85, mathematics: 95 },
        { id: 2, name: "Bob", phiy: 80, chemistry: 90, mathematics: 85 },
        { id: 3, name: "Charlie", phiy: 75, chemistry: 80, mathematics: 70 },
        { id: 4, name: "David", phiy: 85, chemistry: 75, mathematics: 90 },
        { id: 5, name: "Emma", phiy: 95, chemistry: 90, mathematics: 100 },
        { id: 6, name: "Frank", phiy: 70, chemistry: 80, mathematics: 75 },
        { id: 7, name: "Grace", phiy: 75, chemistry: 85, mathematics: 80 },
        { id: 8, name: "Henry", phiy: 80, chemistry: 75, mathematics: 85 },
        { id: 9, name: "Ivy", phiy: 90, chemistry: 80, mathematics: 95 },
        { id: 10, name: "Jack", phiy: 85, chemistry: 85, mathematics: 80 },
        { id: 11, name: "Karen", phiy: 75, chemistry: 90, mathematics: 70 },
        { id: 12, name: "Larry", phiy: 80, chemistry: 85, mathematics: 90 },
      ];
      
    return (
        <div>
            <LineChart
            width={1000}
            height={300}
            data={marksArray} >
            <Line dataKey={"phiy"}></Line>
            <Line stroke="#8884d8" dataKey={"chemistry"}></Line>
            <XAxis dataKey="name"/>   
            <YAxis/>
            <Tooltip/>        
           </LineChart>
            
        </div>
    );
};

export default Dashboard;