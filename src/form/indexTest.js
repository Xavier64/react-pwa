import { Button, Form, Input, InputNumber, Typography, Select } from 'antd';

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};



const validateMessages = {
  required: '${label} is required!',
  types: {
    breed: '${label} is not a breed!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const onFinish = async (values) => {
  console.log(values);
};

export const DogForm = () => (

  <Form
  {...layout}
  name="nest-messages"
  onFinish={onFinish}
  style={{ maxWidth: 600 }}
  validateMessages={validateMessages}
  >
      <Title>Ajouter un chien</Title>

    <Form.Item name={['user', 'name']} label="Nom" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'breed']} label="Race" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
      <InputNumber />
    </Form.Item>
    <Form.Item name={['user', 'sex']} label="sexe">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'okcat']} label="ok Chat" >
      <Select/>
    </Form.Item>
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        Enregistrer
      </Button>
    </Form.Item>
  </Form>
);

