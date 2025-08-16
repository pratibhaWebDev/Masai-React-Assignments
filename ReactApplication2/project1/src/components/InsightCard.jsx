const InsightCard = ({ insights }) => (
    <div>
      <h3>Your Weekly Insights</h3>
      <ul>
        {insights.map((msg, i) => <li key={i}>{msg}</li>)}
      </ul>
    </div>
  );
  