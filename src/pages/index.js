import { Card } from 'antd';
import logo from '../assets/yay.jpg';

export default () => {
  const style = {
    width: '400px',
    margin: '30px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    border: '1px solid #e8e8e8',
  };

  return (
    <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
      <Card.Meta
        avatar={<img
          alt=""
          style={{ width: '64px', height: '64px', borderRadius: '32px' }}
          src={logo}
        />}
        title="测试umi"
        description="一段描述话语一段描述话语一段描述话语一段描述话语一段描述话语"
      />
    </Card>
  );
}