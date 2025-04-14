import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import productsData from "../json/products.json"; // 重命名为 productsData
import Logo from "../components/Logo";
import MySelect from "../components/MySelect";
import { theme } from 'antd';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useProducts } from '../react-query';

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Category() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  
  const { data, isLoading } = useProducts();
  const productData = data || [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}]; // 重命名为 productData

  const products = Array.isArray(productData) ? productData : []; // 确保 productData 是数组

  return (
    <div className="maincontainer mainLayout">
      <ScrollToTopOnMount/>
      <Helmet>
        <title>全部商品</title>
        <style>{`
          body { 
            background-color: ${colorBgBase}; 
            color: ${colorTextBase}
          }
        `}</style>
      </Helmet>
      
      <Header
        className="layoutHeader"
        slogan="An example made by Vite."
      />
      <Logo />
      <MySelect products={products} isLoading={isLoading}/>
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Category;