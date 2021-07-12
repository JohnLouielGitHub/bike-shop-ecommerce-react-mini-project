// import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import Product from "../components/trial-products/trialProduct";
import gql from "graphql-tag";
import { server } from "../config";

// import { initParams } from "request";

const PRODUCT_QUERY = gql`
  query {
    products(first: 22) {
      nodes {
        id
        name
        slug
        productCategories(first: 4) {
          nodes {
            name
          }
        }
        ... on SimpleProduct {
          price
          id
          sku
          slug
          description(format: RENDERED)
        }
        image {
          uri
          sourceUrl
        }
      }
    }
  }
`;

const ProductImport = (props, data) => {
  console.warn(props);
  console.log(data);

  return (
    <div>Hello</div>
    // <Layout>
    // 	<div className="product-container">
    // 		{ products.length ? (
    // 			products.map( product => <Product key={ product.id } product={ product } /> )
    // 		) : ''}
    // 	</div>
    // 	Hello World
    // </Layout>
  );
};

const getInitialProps = async function () {
  const result = await client.query({ query: PRODUCT_QUERY });

  return {
    products: result.data.products.nodes,
  };
};

export default ProductImport;
