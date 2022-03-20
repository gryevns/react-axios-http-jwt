# react-axios-http-jwt

Provides a react hook which uses [axios-http-jwt](https://github.com/gryevns/axios-http-jwt) to manage JWT authentication.

```typescript
import axios from 'axios';
import { useClient } from 'react-axios-http-jwt';

const _client = const _client = axios.create({ withCredentials: true });

const onLogin = async (data: any): Promise<string> => {
  const response = await _client.post('/api/token/', data);
  return response.data.access;
};

const onLogout = async (): Promise<void> => {
  await _client.delete('/api/token/clear/');
};

const onRefresh = async (): Promise<string> => {
  const response = await _client.post(`/api/token/refresh/`);
  return response.data.access;
};

const client = useClient(config, onLogin, onLogout, onRefresh);

client.isAuthenticated // true when access token exists
client.isLoading // true when client attempting to load initial access token
client.axios // axios instance with access token header
client.login // login function
client.logout // logout function
```
