import React from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../api';
import useFetch from '../../hooks/useFetch';
import Error from '../interface-elements/Error';
import Head from '../interface-elements/Head';
import Loading from '../interface-elements/Loading';
import PhotoContent from './PhotoContent';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className='container mainContainer'>
        <Head title={data.photo.title}/>
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
