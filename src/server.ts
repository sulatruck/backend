import './database';
import app from './app';

app.listen({ port: 4000 }, () => {
  console.log('Server started running on port 4000!');
});
