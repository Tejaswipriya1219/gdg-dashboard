import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const EventStats = () => {
  const [eventStats, setEventStats] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") 
      .then(response => response.json())
      .then(data => {
        const stats = data.slice(0, 3).map((item, index) => ({
          name: `Metric ${index + 1}`,
          count: item.id * 15
        }));
        setEventStats(stats);
      });
  }, []);

  return (
    <motion.div 
      className="stats-box"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
    
      <h2 className="live-event-stats">📊 Live Event Stats</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={eventStats}>
          <XAxis dataKey="name" stroke="#0073e6" />
          <YAxis stroke="#0073e6" />
          <Tooltip />
          <Bar dataKey="count" fill="#ff9800" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default EventStats;
