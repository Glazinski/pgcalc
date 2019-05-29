import React from "react";
import Layout from '../Layout/Layout.js';
import { rules } from '../storage/rules.js';
import Header from '../components/Header/Header.js';
import Form from '../components/Form/Form.js';
import Rules from '../components/PointsRules/Rules.js';
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
    console.log(event.target.value);
    const {value} = event.target;
    this.setState( prevState => {
      return {selectValue: prevState.value = value}
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
          selectValue={this.state.selectValue}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
        />
      </Layout>
    );
  }
}

export default IndexPage;
