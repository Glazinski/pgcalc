import React from "react";
import Layout from '../Layout/Layout.js';
import { rules } from '../storage/rules.js';
import Header from '../components/Header/Header.js';
import Form from '../components/Form/Form.js';
import Rules from '../components/PointsRules/Rules.js';
import Footer from '../components/Footer/Footer.js';
import styled from 'styled-components';
//import { Link } from "gatsby"


class IndexPage extends React.Component {

  state = {
    rules: rules,
    selectValue: 'matematyka',
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
    this.setState({rules: newRules});
  }

  handleChange = (event) => {
    const {value} = event.target;
    this.setState( prevState => {
      return {
        selectValue: prevState.value = value
      }
    });
  }

  render() {
      //console.log(this.state.idArr);
      const StyledWrapper = styled.div`
        ${({theme}) => theme.querys.desktop} {
          width: 100%;
          height: auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
      `;
      return ( 
      <Layout>
        <Header />
        <StyledWrapper>
          <Form handleSubmit={this.handleSubmit}/>
          <Rules
            {...this.state}
            data={this.state.rules}
            selectValue={this.state.selectValue}
            handleClick={this.handleClick}
            handleChange={this.handleChange}
          />
        </StyledWrapper>
        <Footer />
      </Layout>
    );
  }
}

export default IndexPage;
