const config = {
  method: 'POST',
  url: url,
  headers: {
    Authorization: tokenType + ' ' + accessToken,
    ContentType: 'application/json',
  },
  responseType: 'blob',
  data: data,
};
const response = await axios(config);
const name = response.headers['content-disposition'].split('filename=')[1].replace(/"/g, '');
const url = window.URL.createObjectURL(new Blob([response.data]));
const link = document.createElement('a');
link.href = url;
link.setAttribute('download', name);
link.style.cssText = 'display:none';
document.body.appendChild(link);
link.click();
link.remove();
