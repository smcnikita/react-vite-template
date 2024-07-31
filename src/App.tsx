import { observer } from 'mobx-react-lite';

import AppRoutes from '@/router';

import Layout from '@/components/layout';

const App = observer(() => {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
});

export default App;
