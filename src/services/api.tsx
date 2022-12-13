import axios from 'axios';

export interface list_item {
  id: number;
  message: string;
}

export interface linked_page {
  url: string;
  destiny: string;
}

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const deleteItem = async (id: number) => {
  api
    .delete(`/todo_list/${id}`, { method: 'DELETE' })
    .then((res) => {
      // if (res.status == 200) return true;
      // return false;
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
};

export const addItem = async (newItem: list_item) => {
  api
    .post('/todo_list', newItem)
    .then((res) => {
      // if (res.status == 200) return true;
      // return false;
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
};

export const updateItem = async (newItem: list_item) => {
  api
    .put(`/todo_list/${newItem.id}`, newItem)
    .then((res) => {
      // if (res.status == 200) return true;
      // return false;
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
};
