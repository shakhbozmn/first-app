import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react';
import { Button, Popconfirm, Table } from 'antd';

export default function App() {
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ]);

  const handleDelete = (key) => {
    setDataSource((prevData) => prevData.filter((item) => item.key !== key));
  };

  return (
    <ul
      style={{
        listStyle: 'none',
        padding: '0 20px',
      }}
    >
      <AnimatePresence>
        {dataSource.map((item) => (
          <motion.li
            key={item.key}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            layout
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              margin: '10px 0',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3>{item.name}</h3>
              <p>{item.age}</p>
              <p>{item.address}</p>
            </div>
            <Button onClick={() => handleDelete(item.key)} type="primary" danger>
              Delete
            </Button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}
