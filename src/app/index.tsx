import Footer from '../components/footer';
import Header from '../components/header';
import PageLayout from '../components/page-layout';
import Cart from './cart';
import Main from './main';

function App() {
    return (
        <>
            <PageLayout
                header={<Header title='Магазин' />}
                main={<Main />}
                footer={<Footer />}
            />
            <Cart />
        </>
    );
}

export default App;
