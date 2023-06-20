import { Table } from 'antd';

const DogsTable = (dataSource = []) => {
    const column =[
        {
            title: 'Race',
            dataIndex: 'breed',
            key: 'breed',
          },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          },
          {
            title: 'Nom',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Sexe',
            dataIndex: 'sex',
            key: 'sex',
          },
    ] 
}