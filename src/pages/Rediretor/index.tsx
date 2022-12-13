import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api, linked_page } from '../../services/api';

export function Redirect(): JSX.Element {
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (id == '') return;
    api
      .get('/linked_pages')
      .then((res) => {
        const newUrls: Array<linked_page> = res.data;
        for (const url of newUrls) {
          if (url.url == `/${id}`) {
            window.location.href = url.destiny;
            return;
          }
        }
      })
      .catch((e) => {
        // server responded with error
        if (e.res) {
          // console.log(e.res.data);
          console.log(e.res.status);
          // console.log(e.res.headers);
        }
        // server did not responded
        else if (e.request) {
          console.log(e.request);
        }
        // other errors
        else {
          console.log('Error', e.message);
        }
        console.log(e.config);
      });
  }, []);

  return (
    <>
      <h3>Redirecting...</h3>
    </>
  );
}
