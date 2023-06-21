import '@/styles/globals.css';
import Layout from '@/components/layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  const clearWaitingQueue = () => {
    // Easy, right 😎
    toast.clearWaitingQueue();
  };

  return (
    <Layout>
      <ToastContainer limit={1} />
      <Component {...pageProps} />
    </Layout>
  );
}
