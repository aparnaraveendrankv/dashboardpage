import React, { useState, useContext } from 'react';
import { WidgetContext } from '../context/WidgetContext';

const AddWidgetForm = ({ categoryId }) => {
  const { addWidget } = useContext(WidgetContext);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWidget = {
      id: Math.random(),
      name,
      data: [
        { name: 'Group A', value: Math.floor(Math.random() * 100) },
        { name: 'Group B', value: Math.floor(Math.random() * 100) },
        { name: 'Group C', value: Math.floor(Math.random() * 100) },
        { name: 'Group D', value: Math.floor(Math.random() * 100) }
      ]
    };
    addWidget(categoryId, newWidget);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Widget Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Add Widget</button>
    </form>
  );
};

export default AddWidgetForm;
