import React from 'react';
import { Table } from 'antd';
import Context from '../Context';
import ListAction from './ListAction';

export interface LocaleListProps {}

const LocaleList: React.FunctionComponent<LocaleListProps> = props => {
  const { api } = React.useContext(Context);
  const aaaa = api.hooks.useAsync(() =>
    api.callRemote({
      type: 'org.umi.locale.list',
    }),
  );

  console.log('aaaa', aaaa);

  const columns = [
    {
      title: '标识符',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '12%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: '30%',
      key: 'address',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a style={{ marginRight: 16 }}>编辑</a>
          <a>删除</a>
        </span>
      ),
    },
  ];

  const data = [
    {
      key: 1,
      name: 'John Brown sr.',
      age: 60,
      address: 'New York No. 1 Lake Park',
      children: [
        {
          key: 11,
          name: 'John Brown',
          age: 42,
          address: 'New York No. 2 Lake Park',
        },
        {
          key: 12,
          name: 'John Brown jr.',
          age: 30,
          address: 'New York No. 3 Lake Park',
          children: [
            {
              key: 121,
              name: 'Jimmy Brown',
              age: 16,
              address: 'New York No. 3 Lake Park',
            },
          ],
        },
        {
          key: 13,
          name: 'Jim Green sr.',
          age: 72,
          address: 'London No. 1 Lake Park',
          children: [
            {
              key: 131,
              name: 'Jim Green',
              age: 42,
              address: 'London No. 2 Lake Park',
              children: [
                {
                  key: 1311,
                  name: 'Jim Green jr.',
                  age: 25,
                  address: 'London No. 3 Lake Park',
                },
                {
                  key: 1312,
                  name: 'Jimmy Green sr.',
                  age: 18,
                  address: 'London No. 4 Lake Park',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: 2,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  return (
    <>
      <ListAction />
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default LocaleList;
