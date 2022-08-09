import React, { Component } from "react";
import Chart from "react-google-charts";

export default class DashboardCharts extends Component {
  render() {
    return (
      <Chart
        width={"100%"}
        height={"300px"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={this.props.data}
        options={{
          chart: {
            title: this.props.title,
          },
        }}
        rootProps={{ "data-testid": "2" }}
        className={this.props.class}
      />
    );
  }
}
