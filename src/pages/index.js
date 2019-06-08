import React from "react";
import Layout from '../Layout/Layout.js';
import { rules, subjects } from '../storage/data.js';
import Header from '../components/Header/Header.js';
import Form from '../components/Form/Form.js';
import Rules from '../components/PointsRules/Rules.js';
import Footer from '../components/Footer/Footer.js';
import styled from 'styled-components';
//import { Link } from "gatsby"

const StyledWrapper = styled.div`
    ${({theme}) => theme.queries.desktop} {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

class IndexPage extends React.Component {

  state = {
    rules: rules,
    selectValue: 'matematyka',
    subjects: subjects,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('elo', event.target);
    
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
    const {value, name, type} = event.target;

    const newSub = this.state.subjects.map(item => {
        if(name === item.subject) {
          item.value = value;
        }
        if(item.value){

        }
        return item;
    });
    type === 'select-one' ? 
    this.setState({selectValue: value})
    : this.setState({subjects: newSub});
  }

  render() {
    
      //console.log(this.state)
      return ( 
      <Layout>
        <Header />
        <StyledWrapper>
          <Form 
            handleSubmit={this.handleSubmit} 
            handleChange={this.handleChange}
            {...this.state}
          />
          <Rules
            {...this.state}
            data={this.state.rules}
            selectValue={this.state.selectValue}
            handleClick={this.handleClick}
            handleChange={this.handleChange}
          />
        </StyledWrapper>
        <Footer handleSubmit={this.handleSubmit}/>
      </Layout>
    );
  }
}

export default IndexPage;
