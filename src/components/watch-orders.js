import * as React from 'react';
import { connect } from 'react-redux';
import Header from './common/header';
import EpisodeDetails from './common/episode-details';
import { selectOrderBy } from '../actions';

const options = ['release', 'episode', 'machete'];

const WatchOrders = (props) => {
  console.log(props);
  const { episodes, dispatch } = props;
  return (
    <div>
      <Header />
      <div style={{ padding: '0 24px 12px' }}>
        <label htmlFor="orderOptions">
          Order by:
          <select
            onChange={(e) => dispatch(selectOrderBy(e.target.value))}
            id="orderOptions"
            style={{ marginLeft: '5px' }}
          >
            {options.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div style={{ backgroundColor: '#eee' }}>
        {episodes && episodes.map((episode) => (
          <EpisodeDetails episode={episode} key={episode.imdbId} />
        ))}
      </div>
    </div>
  );
};


function mapStateToProps(state) {
  const { episodes = [], favorites = [] } = state;
  return { episodes, favorites };
}

export default connect(mapStateToProps)(WatchOrders);
