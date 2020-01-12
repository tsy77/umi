import React from 'react';
import { Row, Col, Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Context from '../Context';
import styles from './ListAction.module.less';

const { Group: ButtonGroup } = Button;

export interface ListActionProps {}

const ListAction: React.FunctionComponent<ListActionProps> = props => {
  const { api } = React.useContext(Context);

  return (
    <Row style={{ marginBottom: 16 }} justify="space-between">
      <Col>
        <ButtonGroup className={styles.buttonGroup}>
          <Button type="primary">添加文案</Button>
          <Button>一键提取</Button>
        </ButtonGroup>
      </Col>
      <Col>
        <Input prefix={<SearchOutlined />} placeholder="请输入关键词" />
      </Col>
    </Row>
  );
};

export default ListAction;
