import React, { useContext, useState } from 'react';
import { WidgetContext } from '../context/WidgetContext';
import Widget from './Widget';
import AddIcon from '@mui/icons-material/Add'; // Importing the Add icon from MUI

const Dashboard = () => {
  const { categories, addWidget } = useContext(WidgetContext);
  const [newWidgetName, setNewWidgetName] = useState('');
  const [newWidgetType, setNewWidgetType] = useState('pie');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Handle adding new widget to a category
  const handleAddWidget = () => {
    if (newWidgetName.trim() && selectedCategory !== null) {
      const newWidget = {
        id: `widget-${Math.random()}`, // generate unique id
        name: newWidgetName,
        data: [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 }],
        chartType: newWidgetType,
      };
      addWidget(selectedCategory, newWidget);
      setNewWidgetName('');
      setSelectedCategory(null);
    }
  };

  return (
    <div className="dashboard">
      {categories.map(category => (
        <div key={category.id} className="category-box">
          <h2>{category.name}</h2>

          {/* Container for Add Widget button and widgets */}
          <div className="widget-header">
            <div
              className="add-widget-box"
              onClick={() => setSelectedCategory(category.id)}
            >
              <AddIcon /> {/* Display "+" icon */}
              <span>Add Widget</span>
            </div>

            {/* Show add widget form only if the category is selected */}
            {selectedCategory === category.id && (
              <div className="add-widget-form">
                <input
                  type="text"
                  value={newWidgetName}
                  onChange={e => setNewWidgetName(e.target.value)}
                  placeholder="Enter Widget Name"
                />
                <button onClick={handleAddWidget}>Add Widget</button>
              </div>
            )}
          </div>

          <div className="widget-container">
            {category.widgets.length > 0 ? (
              category.widgets.map(widget => (
                <Widget key={widget.id} widget={widget} categoryId={category.id} />
              ))
            ) : (
              <p>No widgets available</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
