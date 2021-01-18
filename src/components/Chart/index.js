import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import apiIndicador from '../../services/apiIndicador';

export default function Chart(){

	
	const [dados, setDados] = useState({
		data:{
			access_indicator:{
				'2020-09-30':[''],
				'2020-10-01':[''],
				'2020-10-02':[''],
				'2020-10-03':[''],
				'2020-10-04':[''],
				'2020-10-05':[''],
				'2020-10-06':[''],
				'2020-10-07':[''],
				'2020-10-08':[''],
				'2020-10-09':['']

			}
		}
	});

	useEffect(() => {
		async function lerapiIndicador(){
			const response4 = await apiIndicador.get('');
			setDados(response4.data);
			console.log(response4.data);
		}
	
		lerapiIndicador();
	
	}, []);

	const data = {
		labels: ['30/09', '01/10', '02/10', '03/10', '04/10', '05/10', '06/10', '07/10', '09/10'],
		datasets: [
			{
				label: 'Indicador de acesso',
				//fill: false,
				lineTension: 0.1,
				backgroundColor: 'rgba(75,192,192,0.4)',
				borderColor: 'rgba(75,192,192,1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [
					dados.data.access_indicator['2020-09-30'].length,
					dados.data.access_indicator['2020-10-01'].length, 
					dados.data.access_indicator['2020-10-02'].length, 
					dados.data.access_indicator['2020-10-03'].length, 
					dados.data.access_indicator['2020-10-04'].length, 
					dados.data.access_indicator['2020-10-05'].length, 
					dados.data.access_indicator['2020-10-06'].length, 
					dados.data.access_indicator['2020-10-07'].length, 
					dados.data.access_indicator['2020-10-08'].length, 
					dados.data.access_indicator['2020-10-09'].length
				]
			}
		]
	};

		return (
			<div className="flex flex-col items-center w-full max-w-md">
				<Line data={data} />
			</div>
		);
	}
