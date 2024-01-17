import clienteAxios from "./Axios";

export default async function MethodGet(url, data) {
  return await clienteAxios.get(url, {
    params: data
  });
}

export async function MethodPost(url, data) {
  return await clienteAxios.post(url, data);
}

export async function MethodPut(url, data) {
  return await clienteAxios.put(url, data);
}

export async function MethodDelete(url) {
  return await clienteAxios.delete(url);
}
