import styles from './table.module.css';
import { Table, Button, Modal, Form, Input } from 'antd';
import { useState } from 'react';

let data = require('../../data/table.json');

const columns = [
  {
    title: 'No',
    render: (dataIndex, record, index) => {
      return ( <span>{ index + 1 }</span> )
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Cultivation',
    dataIndex: 'cultivation',
    key: 'cultivation',
  },
  {
    title: 'Alchemy Tier',
    dataIndex: 'alchemyTier',
    key: 'alchemyTier',
  }
];

const TableBtth = () => {
  //form 
  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };


  //modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //end of modal

  const content = (
    <div className={styles.container}>
      <Button type="primary" className={styles.addButton} onClick={showModal}>Add</Button>
      <Table dataSource={data.data} columns={columns} rowKey="id"/>

      <Modal title="Add Hero" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
        {...layout}
        form={form}
        name="add"
        style={{ maxWidth: 600 }}
      >
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
      </Modal>
    </div>
  )

  return content
}

export default TableBtth;
