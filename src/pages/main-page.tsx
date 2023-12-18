//components
import Gallery from '../components/gallery/gallery';
import Header from '../components/header/header';
//styles
import './main-page.scss';

const MainPage = (): JSX.Element => {
  return (
    <div className="main-page">
      <div className="main-page__wrap container">
        <Header />
        <Gallery />
      </div>
    </div>
  );
};

export default MainPage;
