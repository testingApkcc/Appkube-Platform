import React, { PureComponent, createRef } from 'react';
import * as d3 from 'd3';
import { PanelProps } from '@grafana/data';
import './css/style.css';

interface DataItem {
  age_group: string;
  population: number;
}

interface DonutChartProps {
  data: DataItem[];
  width: number;
  height: number;
}
interface State {
  data: DataItem[];
}

interface DataPoint {
  age_group: string;
  population: number;
}
let data: DataPoint[] = [
  {
    age_group: 'Running pods (65%)',
    population: 60,
  },
  {
    age_group: 'Pending pods (25%)',
    population: 25,
  },
  {
    age_group: 'Failed pods (10%)',
    population: 10,
  },
];

class AppkubePodsOverviewPanel extends PureComponent<PanelProps, DonutChartProps, State> {
  constructor(props: PanelProps) {
    super(props);
  }

  private svgRef = createRef<SVGSVGElement>();

  private thickness = 25;

  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate() {
    this.drawChart();
  }

  drawChart() {
    const { width, height } = this.props;

    const svg = d3.select(this.svgRef.current).attr('width', 300).attr('height', 300);

    svg.selectAll('*').remove(); // Clear previous elements

    const radius = Math.min(width, height) / 2;
    const innerRadius = radius * 0.6;
    const colors = ['#53ca43', '#f9d33d', '#ff2d2e'];
    const color = d3.scaleOrdinal<string>(colors).domain(data.map((d: { age_group: any }) => d.age_group));
    const pie = d3.pie<DataItem>().value((d: { population: any }) => d.population);
    const arc = d3
      .arc<d3.PieArcDatum<DataItem>>()
      .innerRadius(innerRadius - this.thickness)
      .outerRadius(radius * 0.6);
    const arcs = svg
      .selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'donut-arc')
      .attr('transform', `translate(${width / 6.5},${height / 2.5})`);

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d: any, i: any) => color(i))
      .attr('stroke', 'white')
      .style('stroke-width', 0)
      .style('stroke', '#FFFFFF')
      .style('border-radius', '50%')
      .style('fill', (d: any, i: any) => color(i))
      .attr('clip-path', (d: any, i: any) => `url(#clip${i})`);

    const legend = svg
      .append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${width / 2.6 - 300},${height / -1.8 + 300})`);

    const lg = legend
      .selectAll<SVGGElement, d3.PieArcDatum<DataItem>>('g')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'legendGroup')
      .attr('transform', (d: any, i: number) => {
        const xOff = (i % 1) * 300;
        const yOff = Math.floor(i / 1) * 20;
        return `translate(${xOff},${yOff})`;
      });

    lg.append('rect')
      .attr('fill', (d: { data: { age_group: any } }) => color(d.data.age_group))
      .attr('x', 30 - 15)
      .attr('y', 30 - 7)
      .attr('width', 15)
      .attr('height', 5)
      // .attr('rx', 3)
      .append('title')
      .html((d: { data: { age_group: any } }) => d.data.age_group);

    lg.append('text')
      .style('font-family', '"Montserrat", sans-serif')
      .style('font-size', '12px')
      .attr('x', 20 + 15)
      .attr('y', 30)
      .text((d: { data: { age_group: any } }) => d.data.age_group)
      .append('title');
  }
  render() {
    const { width, height } = this.props;
    return (
      <div className="pods-overview-panel">
        <div className="pods-overview-inner-panel">
          <div className="heading">Pods Overview</div>
          <svg ref={this.svgRef} width={width} height={height}></svg>
        </div>
      </div>
    );
  }
}

export default AppkubePodsOverviewPanel;
