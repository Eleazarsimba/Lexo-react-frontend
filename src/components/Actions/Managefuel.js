import React,{useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2';
import axios from 'axios';

const Managefuel = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/theemployee/thesales')
    .then(function (response) {
        // handle success
        console.log(response.data.data);
        setData(response.data.data)
    })
    .catch(function (error) {
        // handle errors
        console.log(error.response);
    })
    },[]);

const months = data.map(d => {
  return(
    d.Month
    );
  });

const petrol = data.map(d => {
  return(
    d.Petrol
    );
  });
  const diesel = data.map(d => {
    return(
      d.Diesel
      );
    });
  const kerosene = data.map(d => {
    return(
      d.Kerosene
      );
    });

const petro = {
  labels: months,
  datasets: [
    {
      label: 'Petrol',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 2,
      data: petrol
    }
  ]}
const dieso = {
    labels: months,
    datasets: [
    {
        label: 'Diesel',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'green',
        borderColor: 'green',
        borderWidth: 2,
        data: diesel
      }
    ]}

const kero = {
    labels: months,
    datasets: [
      {
        label: 'kerosene',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 2,
        data: kerosene
      } 
  ]}

    return (
        <div className='level0'>
            <div className='level1'>
                <h3>Petrol Level</h3>
                <div>
                    <Line
                    data={petro}
                    options={{
                        title:{
                        display:true,
                        text:'Average sale of petrol per month in litres',
                        fontSize:20
                        },
                        legend:{
                        display:true,
                        position:'right'
                        }
                    }}
                    />
                </div>
            </div>
            <div className='level1'>
                <h3>Diesel Level</h3>
                <div>
                    <Line
                    data={dieso}
                    options={{
                        title:{
                        display:true,
                        text:'Average sale of petrol per month in litres',
                        fontSize:20
                        },
                        legend:{
                        display:true,
                        position:'right'
                        }
                    }}
                    />
                </div>
            </div>
            <div className='level1'>
                <h3>Kerosene Level</h3>
                    <div>
                    <Line
                        data={kero}
                        options={{
                            title:{
                            display:true,
                            text:'Average sale of petrol per month in litres',
                            fontSize:20
                            },
                            legend:{
                            display:true,
                            position:'right'
                            }
                        }}
                        />
                    </div>
            </div>
        </div>
    )
}

export default Managefuel
