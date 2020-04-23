import * as React from 'react';
import FavoriteIcon from '../../assets/favorite.svg';

const EpisodeDetails = ({ episode, favorite, favoriteHandler }) => (
  <div style={{
    display: 'flex',
    borderTop: '1px solid #999',
    padding: '12px 24px',
    fontFamily: 'Verdana, Arial',
  }}
  >
    <div style={{ paddingRight: '36px' }}>
      <img src={episode.coverUrl} alt="Cover" width={200} />
    </div>
    <div style={{ flexGrow: 4, paddingRight: '36px' }}>
      <div>
        <h3>{episode.title}</h3>
      </div>
      <div>
        <b>Director:</b>
        <span style={{ paddingLeft: '12px' }}>{episode.directors}</span>
      </div>
      <div>
        <b>Actors:</b>
        <span style={{ paddingLeft: '12px' }}>{episode.actors}</span>
      </div>
      <div>
        <b>Release Date:</b>
        <span style={{ paddingLeft: '12px' }}>{episode.released}</span>
      </div>
      <div>
        <b>Plot:</b>
        <span style={{ paddingLeft: '12px' }}>{episode.plot}</span>
      </div>
    </div>
    <div>
      <input
        type="image"
        src={FavoriteIcon}
        alt="favorite"
        onClick={() => favoriteHandler(episode.imdbId, favorite)}
        width={36}
        height={36}
        style={(!favorite && { filter: 'grayscale(1)' }) || {}}
      />
    </div>
  </div>
);

export default EpisodeDetails;
