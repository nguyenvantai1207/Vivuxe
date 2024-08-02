import React from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import './style.css';

interface DataType {
  key: string;
  address: string;
  income: string;
  rentalDays: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: '',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Thu nhập /tháng',
    dataIndex: 'income',
    key: 'income',
  },
  {
    title: 'Số ngày cho thuê/tháng',
    dataIndex: 'rentalDays',
    key: 'rentalDays',
  },
];

const data: DataType[] = [
  {
    key: '1',
    address: 'TP.HCM (khu vực trung tâm)',
    income: 'Từ 5 - 10 triệu',
    rentalDays: 'Từ 6 - 12 ngày',
  },
  {
    key: '2',
    address: 'TP.HCM (khu vực ngoại thành)',
    income: '3 - 6',
    rentalDays: '4 - 8',
  },
  {
    key: '3',
    address: 'Hà Nội (khu vực trung tâm)',
    income: '5 - 8',
    rentalDays: '6 - 10',
  },
  {
    key: '4',
    address: 'Hà Nội (khu vực ngoại thành)',
    income: '3 - 6',
    rentalDays: '4 - 8',
  },
  {
    key: '5',
    address: 'Đà Nẵng',
    income: '3 - 6',
    rentalDays: '4 - 8',
  },
  {
    key: '6',
    address: 'Bình Dương',
    income: '3 - 6',
    rentalDays: '4 - 8',
  },
  {
    key: '7',
    address: 'Đà Lạt',
    income: '3 - 6',
    rentalDays: '4 - 8',
  },
  {
    key: '8',
    address: 'Phú Quốc',
    income: '3 - 6',
    rentalDays: '4 - 8',
  },
  {
    key: '9',
    address: 'TP khác',
    income: '2 - 5',
    rentalDays: '3 - 6',
  },
];

const AboutCarRentalPerson: React.FC = () => {

    return (
        <div>
            <Table className='table' columns={columns} dataSource={data} />;
        </div>
    )
    
}
export default AboutCarRentalPerson;