import { Form, Select, Input, InputNumber, Button, Space } from 'antd';
const { Item } = Form;
const { Option } = Select;

export const DogForm = ({onAddDog = f => f}) => {

  const rules = [
      {
        required: true,
        message: 'Requis',
      },
  ];

  const okCatSelectOptions = [
    {
      label: 'Oui',
      value: true,
    },
    {
      label: 'Non',
      value: false,
    },
  ];

  const onFinish = (values) => onAddDog(values);

  return (
    <Form
      name="dogForm"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      onFinish={onFinish}
      >
      <Item
        label="Nom"
        name="name"
        rules={rules}
      >
        <Input />
      </Item>
      <Item
        label="Âge"
        name="age"
        rules={rules}
      >
        <InputNumber />
      </Item>
      <Item
        label="Race"
        name="breed"
        rules={rules}
      >
        <Input />
      </Item>
      <Item
        label="Ok Chat ?"
        name="okcat"
        rules={rules}
      >
        <Select options={okCatSelectOptions} />
      </Item>
      <Item
        label="Sexe"
        name="sex"
        rules={rules}
      >
        <Select>
          <Option title="Mâle" value="Mâle" />
          <Option title="Femelle" value="Femelle" />
        </Select>
      </Item>
      <Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Space>
          <Button type="primary" htmlType="submit">
            Créer
          </Button>
          <Button type="primary">
            Annuler
          </Button>
        </Space>
      </Item>

    </Form>
  )
}