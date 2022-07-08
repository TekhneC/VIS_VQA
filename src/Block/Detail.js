import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';

const data = [
  {
    key: '42000',
    question_id: 42000,
    image_id:42,
    question_type:'what color',
    question:'What color are the gym shoes?',
    length: 6,
    answer:'white',
  },
  {
    key: '42001',
    question_id: 42001,
    image_id:42,
    question_type:'is there a',
    question:'Is there a red sandal here?',
    length: 6,
    answer:'yes',
  },  
  {
    key: '42002',
    question_id: 42002,
    image_id:42,
    question_type:'what color',
    question:'What color is the flip flop?',
    length: 6,
    answer:'red',
  },  
];
var cooperate_value=['42000'];
var cooperate_name=['question_id'];


const Detail = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    console.log(selectedKeys);
    confirm();
    console.log(confirm({
      closeDropdown: false,
    }));
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });


  const columns = [
    {
      title: 'Question id',
      dataIndex: 'question_id',
      key: 'question_id',
      width: '15%',
      ...getColumnSearchProps('question_id'),
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Image id',
      dataIndex: 'image_id',
      key: 'image_id',
      width: '15%',
      ...getColumnSearchProps('image_id'),
    },
    {
      title: 'Question type',
      dataIndex: 'question_type',
      key: 'question_type',
      ...getColumnSearchProps('question_type'),
    },
    {
        title: 'Question',
        dataIndex: 'question',
        key: 'question',
        width: '25%',
        ...getColumnSearchProps('question'),
      },
    {
        title: 'Length',
        dataIndex: 'length',
        key: 'length',
        ...getColumnSearchProps('length'),
        sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    }, 
    {
        title: 'Answer',
        dataIndex: 'answer',
        key: 'answer',
        ...getColumnSearchProps('answer'),
    },  
  ];
  return <Table columns={columns} dataSource={data} />;
};

export  {Detail};