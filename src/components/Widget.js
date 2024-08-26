import React, { useContext } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { WidgetContext } from '../context/WidgetContext';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Widget = ({ widget, categoryId }) => {
  const { removeWidget } = useContext(WidgetContext);

  // Handle removing the widget
  const handleRemove = () => {
    removeWidget(categoryId, widget.id);
  };

  return (
    <div className="widget-box">
      <h4>{widget.name}</h4>
      {widget.chartType === 'pie' && widget.data && (
        <PieChart width={250} height={250}>
          <Pie data={widget.data} dataKey="value" outerRadius={100} fill="#8884d8">
            {widget.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      )}
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Widget;
