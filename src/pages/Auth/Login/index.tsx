import { Button, Checkbox, Form, Input } from "antd";
import { useLazyGetUserQuery, useLoginMutation } from "../../../services/user";
import { CacheUtils } from "../../../utils";
import { CONSTANT } from "../../../config";
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function LoginPage() {
  const [login, { isLoading }] = useLoginMutation();
  const [getUser] = useLazyGetUserQuery();

  const onFinish = async (request: FieldType) => {
    console.log("Success:", request);
    try {
      const data = await login({ username: request.username!, password: request.password! }).unwrap();
      await Promise.all([
        CacheUtils.set(CONSTANT.USER_TOKEN_KEY, data.data?.access_token!),
        CacheUtils.set(CONSTANT.USER_REFRESH_TOKEN_KEY, data.data?.refresh_token!),
      ]);
      getUser(null, false);
    } catch (err) {
      console.error(err);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType> label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
        <Input />
      </Form.Item>

      <Form.Item<FieldType> label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType> name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
