import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../interface-elements/Error';
import Loading from '../interface-elements/Loading';
import styles from './FeedPhotos.module.css'

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();
  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTO_GET({ pages: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem  key={photo.id} photo={photo}/>
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
