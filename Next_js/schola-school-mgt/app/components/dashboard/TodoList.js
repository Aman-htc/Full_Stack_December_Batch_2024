


import React, { useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { Calendar, MoreHorizontal } from 'lucide-react';
import { getTodoList } from '@/services/dashboardService';

//  Reusable Item
const TodoItem = ({ item, isLast }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <>
      <div className="d-flex align-items-start gap-3 py-2 px-2 rounded-3">

        {/* Checkbox */}
        <Form.Check
          type="checkbox"
          checked={false}
          readOnly
          className="mt-1 custom-checkbox"
        />

        {/* Content */}
        <div className="flex-grow-1">
          <h6
            className="mb-1 body-xs-med text-dark"
          >
            {item.title}
          </h6>

          <div
            className="d-flex align-items-center gap-2 bg-dark-light px-1 rounded-2"
            style={{ width: '150px' }}
          >
            <div className='d-grid place-items-center bg-secondary p-1 rounded-3'>
              <Calendar
                size={14}
                className='text-danger-subtle'
              />
            </div>

            <span className='text-danger-subtle cap-md-med'>
              {formatDate(item.date)}
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      {!isLast && (
        <div className="border-top my-2 opacity-25" />
      )}
    </>
  );
};

export default function TodoList({ search }) {
  const [todos, setTodos] = useState([]);

  const fetchTodoList = async () => {
    try {
      const response = await getTodoList();

     

      if (response?.success) {
        setTodos(response.data || []);
      }
    } catch (error) {
      console.error('Todo List Error:', error);
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);


  const filteredTodos = todos.filter((item) => {
    const value = (search || "").toLowerCase().trim();

    if (!value) return true;

    return (
      item.title?.toLowerCase().includes(value)
    );
  });


  const visibleTodos = filteredTodos.slice(0, 3);

  return (
    <Card className="border-0 bg-light shadow-sm rounded-4 p-4 h-100">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="h6-alt mb-0 text-danger-subtle">
          To Do List
        </h6>
        <MoreHorizontal size={18} className="text-dark" />
      </div>

      {/* List */}

      <div>
        {visibleTodos.length > 0 ? (
          visibleTodos.map((item, index) => (
            <TodoItem
              key={`${item.type}-${item.id}-${index}`}
              item={item}
              isLast={index === visibleTodos.length - 1}
            />
          ))
        ) : (
          <div className="text-center py-3 text-muted">
            No Todo Found
          </div>
        )}
      </div>

    </Card>
  );
}