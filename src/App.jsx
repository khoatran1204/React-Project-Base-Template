import Routers from './Routers/Routers';
import { Button, ConfigProvider } from 'antd';

const App = () => {
    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#2D3748' } }}>
            <h1 style={{ color: 'red' }}>{`Hello, i'm REACT 1`}</h1>
            <Button type="primary" danger>{`test antd button`}</Button>
            <Routers />
        </ConfigProvider>
    );
};
export default App;
