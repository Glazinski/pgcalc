import React from "react";
import Layout from '../Layout/Layout.js';
import shortid from 'short-id';
import { rules } from '../storage/rules.js';
//import styled from 'styled-components';
import Header from '../components/Header/Header.js';
import Form from '../components/Form/Form.js';
import Rules from '../components/PointsRules/Rules.js';
//import { Link } from "gatsby"

// const H1 = styled.h1`
//   color: ${({theme}) => theme.colors.primary};
// `;

class IndexPage extends React.Component {

  state = {
    rules: rules
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('elo', event.type);
  }

  handleClick = (id) => {
    console.log('elo', id);
    const newRules = this.state.rules.filter(item => {
      if(id === item.id) {
        item.clicked = !item.clicked;
      }
      return item;
    });
    console.log(newRules)
    this.setState(prevState => {
      return {
        rules: newRules
      }
    });
  }

  render() {
      //console.log(this.state.idArr);
      return ( 
      <Layout>
        <Header />
        <Form handleSubmit={this.handleSubmit}/>
        <Rules
          data={this.state.rules}
          handleClick={this.handleClick} 
        />
      </Layout>
    );
  }
}

export default IndexPage;
