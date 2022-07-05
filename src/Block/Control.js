import { Button } from 'antd';
import { Input, Space } from 'antd';
import React  from 'react';
import { AudioOutlined } from '@ant-design/icons';
import './Control.css';

const { Search } = Input;

const onSearch = (value) => console.log(value);

class Control extends React.Component{
    render(){
        return(
            <div>
                <Search placeholder="输入以搜索数据~" onSearch={onSearch} enterButton />
                <Button block = "True">问题视角</Button>
                <Button block = "True">答案视角</Button>
            </div>
        );
    }
}