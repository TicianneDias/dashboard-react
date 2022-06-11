import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Title } from "../../styles/CommunsStyles";
import { DashBarContainer } from "./styles";
import { BsFillInfoCircleFill } from 'react-icons/bs'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        data: [200, 330, 408, 450, 540, 580, 690, 1100, 1200, 1380]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Coréia do Sul', 'Canadá', 'Reino Unido', 'Holanda', 'Itália', 'França', 'Japão',
            'Estados Unidos', 'China', 'Alemanha'
          ],
        }
      },
    
    
    };
  }


  render() {
    return (


        <DashBarContainer>
          <Title>
            <div>
              <h1>Barras</h1>
            </div>
            <div>
              <BsFillInfoCircleFill id="infoIcon" />
            </div>
          </Title>
          <Chart options={this.state.options} series={this.state.series} type="bar" width={603} height={290} style={{margin: '29px 19px 7px 20px'}}/>
        </DashBarContainer>



    );
  }
}

export default App;