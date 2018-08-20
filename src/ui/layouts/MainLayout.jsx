import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Switch, Route } from 'react-router-dom';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { RepoPage } from '../../ui/pages/RepoPage';
import { OrgPage } from '../../ui/pages/OrgPage';
import { SideBar } from '../components/SideBar';
import { GET_ORGANIZATION } from '../../api/apollo/queries';
import history from '../../api/history';

const Main = styled.main`
  position:fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
`;

const Aside = styled.aside`
  position: relative;
  width: 250px;
  flex-grow: 0;
  flex-shrink: 0;
  background: linear-gradient(to bottom, #b993d6, #8ca6db);
`;

const PageWrap = styled.section`
  flex-grow: 1;
  padding: 10px;
  overflow-y:scroll;
  -webkit-overflow-scrolling: touch;
  background: linear-gradient(to bottom, #f3e7e9, #e3eeff);
`;

@connect(
  state => state,
  null,
)
class MainLayout extends Component {

  static propTypes = {
    core: PropTypes.object.isRequired,
  };

  render() {
    const {
      core: {
        searchOrganization: organization,
      }
    } = this.props;
    return (
      <Router history={history}>
        <Query
          query={GET_ORGANIZATION}
          variables={{ organization }}
        >
          {({ loading, error, data }) => {
            return (
              <Main>
                <Aside>
                  <SideBar
                    data={data}
                    loading={loading}
                    error={error}
                  />
                </Aside>
                <PageWrap>
                  {!error && (
                    <Switch>
                      <Route
                        path="/:repo"
                        component={RepoPage}
                      />
                      <Route
                        path="/"
                        exact
                        render={() => (
                          <OrgPage
                            loading={loading}
                            organization={data.organization}
                          />
                        )}
                      />
                    </Switch>
                  )}
                </PageWrap>
              </Main>
            );
          }}
        </Query>
      </Router>
    );
  }
}

export default MainLayout;
