import axios from 'axios';

export interface list_item {
  id: number;
  message: string;
}

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const deleteItem = async (id: number) => {
  api.delete(`/todo_list/${id}`, { method: 'DELETE' }).then((res) => {
    // return res;
  });
};

export const addItem = async (newItem: list_item) => {
  api.post('/todo_list', newItem).then((res) => {
    // return res;
  });
};

export const updateItem = async (newItem: list_item) => {
  api.put(`/todo_list/${newItem.id}`, newItem).then((res) => {
    // return res;
  });
};
