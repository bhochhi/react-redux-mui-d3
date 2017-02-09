require('./dashboard.scss');
import React from 'react';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import LayoutContainer from 'components/pages/dashboard/LayoutContainer';
import reactMixin from 'react-mixin';
import HeatMap from './HeatMap';
import request from './request';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  ComposedChart,
  Area
} from 'recharts';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.getData();
    setInterval(() => this.getData(), 1000);
  }
  async getData() {
    let {data} = await request('./currentData.json');
    this.setState({data});
  }

  render() {
    if (this.state.data.length === 0) {
      return null;
    }
    return (
      <LayoutContainer headerText='Dashboard'>
        <div className="wrap page-content">
          <div className="dashboard-container">
            <div className="dashboard-item">
            <h2>24 hour workload on an average week.</h2>
            <HeatMap data={this.state.data}/>
            </div>
          </div>
          <div className="dashboard-container">
            <div className="dashboard-item">
              <TwoLevelPieChart/>
            </div>

            <div className="dashboard-item">
              <LineBarAreaComposedChart/>
            </div>
          </div>
          <div className="horizontal-divider"/>
          <div className="dashboard-container">
            <div className="dashboard-item">
              <SimpleLineChart/>
            </div>

            <div className="dashboard-item">
              <SimpleRadialBarChart/>
            </div>
          </div>
        </div>
      </LayoutContainer>
    )
  }
}

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  }, {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  }, {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  }, {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  }, {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  }, {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  }, {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];
const SimpleLineChart = React.createClass({
  render() {
    return (
      <LineChart
        width={700}
        height={400}
        data={data}
        margin={{
        top: 15,
        right: 5,
        left: 5,
        bottom: 15
      }}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend/>
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{
          r: 8
        }}/>
        <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
      </LineChart>
    );
  }
})
const {PropTypes} = React;
// const {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
// Legend} = Recharts;
const dataLineBarAreaComposedChart = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400
  }, {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506
  }, {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989
  }, {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228
  }, {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100
  }, {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700
  }
];

const LineBarAreaComposedChart = React.createClass({
  render() {
    return (
      <ComposedChart
        width={700}
        height={400}
        data={dataLineBarAreaComposedChart}
        margin={{
        top: 20,
        right: 80,
        bottom: 20,
        left: 20
      }}>
        <XAxis dataKey="name" label="Pages"/>
        <YAxis label="Index"/>
        <Tooltip/>
        <Legend/>
        <CartesianGrid stroke='#f5f5f5'/>
        <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8'/>
        <Bar dataKey='pv' barSize={20} fill='#413ea0'/>
        <Line type='monotone' dataKey='uv' stroke='#ff7300'/>
      </ComposedChart>
    );
  }
})

// const {PieChart, Pie, Sector} = Recharts;
const dataPieChart = [
  {
    name: 'Group A',
    value: 400
  }, {
    name: 'Group B',
    value: 300
  }, {
    name: 'Group C',
    value: 300
  }, {
    name: 'Group D',
    value: 200
  }
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0
    ? 1
    : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0
    ? 'start'
    : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}/>
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}/>
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text
        x={ex + (cos >= 0
        ? 1
        : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333">{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0
        ? 1
        : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999">
        {`(Rate ${ (percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const TwoLevelPieChart = React.createClass({
  getInitialState() {
    return {activeIndex: 0};
  },

  onPieEnter(data, index) {
    this.setState({activeIndex: index});
  },
  render() {
    return (
      <ResponsiveContainer>
        <PieChart onMouseEnter={this.onPieEnter}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={dataPieChart}
            cx={300}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"/>
        </PieChart>
      </ResponsiveContainer>
    );
  }
})

// const {RadialBarChart, RadialBar, Legend} = Recharts;

const dataRadial = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8'
  }, {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed'
  }, {
    name: '30-34',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1'
  }, {
    name: '35-39',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d'
  }, {
    name: '40-49',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c'
  }, {
    name: '50+',
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57'
  }, {
    name: 'unknow',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658'
  }
];

const style = {
  top: 100,
  left: 550,
  lineHeight: '24px'
};

const SimpleRadialBarChart = React.createClass({
  render() {
    return (
      <RadialBarChart
        width={700}
        height={400}
        cx={350}
        cy={250}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={dataRadial}>
        <RadialBar minAngle={15} label background clockWise={true} dataKey='uv'/>
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout='vertical'
          verticalAlign='bottom'
          wrapperStyle={style}/>
      </RadialBarChart>
    );
  }
})
Dashboard.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Dashboard;
