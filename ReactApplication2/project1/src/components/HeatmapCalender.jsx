import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const HeatmapCalendar = ({ logs }) => (
  <CalendarHeatmap
    startDate={new Date('2025-01-01')}
    endDate={new Date()}
    values={logs.map(log => ({
      date: log.date,
      count: log.productivityScore,
    }))}
  />
);

export default HeatmapCalendar;
