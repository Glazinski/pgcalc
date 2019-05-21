import React from "react";
import Layout from '../Layout/Layout.js';
//import styled from 'styled-components';
import Header from '../components/Header/Header.js';
import Form from '../components/Form/Form.js';
//import { Link } from "gatsby"

// const H1 = styled.h1`
//   color: ${({theme}) => theme.colors.primary};
// `;

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Form />
    </Layout>
  );
}

export default IndexPage;
