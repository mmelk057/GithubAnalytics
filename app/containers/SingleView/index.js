import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import LineChart from 'components/LineChart';
import InfoChart from 'components/InfoChart';
import styled from 'styled-components';
import UserProfile from 'components/UserProfile';
import { Redirect } from 'react-router-dom'
import queryParamParse from 'utils/queryParamParse';

class SingleView extends React.Component {

  /**
   * The constructor for the single view page
   */
  constructor() {
    super();
    this.state = {};
  }

  /**
   * The render method for the single view page
   */
  render() {
    // Extract the username from the query params
    let username = queryParamParse(this.props.location.search)[0];
    
    // If the username was not set than the url is invalid
    // Redirect the user to the home page
    if(username == null){
      return <Redirect to="/" />
    }

    let ScoreDiv = styled.div`
      float: right;
      padding: 10px;
      border: 1px solid black;
      border-radius: 3px;
      font-size: 1.25em;
    `;

    let ChartDiv = styled.div`
      padding: 5px;
      border: 1px solid black;
      border-radius: 3px;
    `;

    let PieChartDiv = styled.div`
      padding: 5px;
      border: 1px solid black;
      border-radius: 3px;
      width: 18rem;
      margin: auto;
    `;

    return (
      <div>
        <Header name='Profile'/>
        <div className="container mt-4">
          <div className="row mb-4">
            <div className="col-12">
              <ScoreDiv>Score: 9.8</ScoreDiv>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div>
                <UserProfile name={username} isSingle={true}/>
              </div>
              <PieChartDiv className="col-12 mt-3">
                <InfoChart />
              </PieChartDiv>
            </div>
            <div className="col-8">
              <ChartDiv>
                <LineChart users={1} singleview={false} usernames={[username]} />
              </ChartDiv>
              <ChartDiv className="mt-4">
                <LineChart users={1} singleview={true} usernames={[username]} />
              </ChartDiv>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SingleView.propTypes = {};

export default SingleView;
