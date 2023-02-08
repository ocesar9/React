import React from 'react'
import { STATUS_GET } from '../../api';
import useFetch from '../../hooks/useFetch'
import Error from '../interface-elements/Error';
import Head from '../interface-elements/Head'
import Loading from '../interface-elements/Loading';

const UserStatusGraphs = React.lazy(() => import('./UserStatusGraphs'))

const UserStatus = () => {
  const {data,error, loading, request} = useFetch();
  React.useEffect(() => {
    async function getData(){
      const {url, options} = STATUS_GET();
      await request(url,options);
    }
    getData();
  },[request])
  if(loading) return <Loading />
  if(error) return <Error error={error}/>
  if(data)
  return (
    <React.Suspense fallback={<Loading/>}>
      <Head title='Estatisticas'/>
      <UserStatusGraphs data={data}/>
    </React.Suspense>
  )
  else return null;
}

export default UserStatus