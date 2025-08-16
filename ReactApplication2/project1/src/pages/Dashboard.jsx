// pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import TrackerForm from '../components/TrackerForm';
import ReflectionEditor from '../components/ReflectionEditor';
import HeatmapCalendar from '../components/HeatmapCalendar';
import InsightCard from '../components/InsightCard';
import StreakCounter from '../components/StreakCounter';
import { logDailyEntry, fetchLogs, fetchInsights } from '../services/api';

const Dashboard = () => {
  const [logs, setLogs] = useState([]);
  const [reflection, setReflection] = useState('');
  const [streak, setStreak] = useState(0);
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    async function loadData() {
      const { data } = await fetchLogs();
      setLogs(data);
      setStreak(calculateStreak(data));
      const insightsRes = await fetchInsights();
      setInsights(insightsRes.data);
    }
    loadData();
  }, []);

  const handleSubmit = async (formData) => {
    await logDailyEntry({ ...formData, reflection });
    setReflection('');
    const updatedLogs = await fetchLogs();
    setLogs(updatedLogs.data);
    setStreak(calculateStreak(updatedLogs.data));
  };

  return (
    <div className="dashboard">
      <h1>Welcome Back 👋</h1>
      <StreakCounter streak={streak} />
      <TrackerForm onSubmit={handleSubmit} />
      <ReflectionEditor value={reflection} onChange={setReflection} />
      <HeatmapCalendar logs={logs} />
      <InsightCard insights={insights} />
      {/* Optional: Export button */}
    </div>
  );
};

export default Dashboard;
