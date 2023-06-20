import { Table, Typography, Tag, Space, Tooltip, Button } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
const { Title } = Typography;

export const DogsTable = ({ dataSource = []}) => {
  const columns = [
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
    {
      title: 'Ok Chat',
      dataIndex: 'okcat',
      key: 'okcat',
      render: (text, record) => {
        const color = record?.okcat ?  '#87d068' : '#f50';
        return (
          <Tag color={color} >&nbsp;</Tag>
        );
      }
    },
    {
      title: 'Actions',
      key: 'action',
      render: (text, record) => {
        return (
          <Space direction="vertical">
            <Space wrap>
              <Tooltip title="Modifier">
                <Button type="link" shape="circle" icon={<EditOutlined />} onClick={() => console.log(record)} />
              </Tooltip>
              <Tooltip title="Suprimer">
                <Button type="link" shape="circle" icon={<DeleteOutlined />} onClick={() => console.log(record.id)} />
              </Tooltip>
            </Space>
          </Space>
        )
      }
    }
  ];

  return(
    <>
      <Title>Liste des chiens du refuge</Title>
      <Table columns={columns} dataSource={dataSource} />
    </>
  );
}