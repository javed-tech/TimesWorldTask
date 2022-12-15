import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { Space, Table, Tag } from 'antd';

const Home = () => {
    const dispatch =  useDispatch();
    const [data , setData]= useState('');

    useEffect(() => {
        let url = `https://restcountries.com/v2/all?fields=name,region,flag`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data));
      }, [])
    
    console.log(data,'data')

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: 320

        //   render: (text) => <a>{text}</a>,
        },
        {
          title: 'Region',
          dataIndex: 'region',
          key: 'flag',
          width: 320
        },
        {
          title: 'Flag',
          dataIndex: 'flag',
          key: 'flag',
          width:120,
         render: (val) => <img src={val} width="100%" />,
        }
      ];
  return (
    <>
        <Table columns={columns} dataSource={data}/>
        {/* <button type='button' onClick={dispatch({type: 'LOGIN',payload: null})}>Logout</button> */}
    </>
  )
}

export default Home