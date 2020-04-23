import * as React from 'react';
import FavoriteIcon from '../../assets/favorite.svg';

const EpisodeDetails = ({ episode, favorite, favoriteHandler }) => (
  <div style={{ display: 'flex', borderTop: '1px solid #999', padding: '12px 24px' }}>
    <div style={{ paddingRight: '36px' }}>
      <img src={episode.coverUrl} alt="Cover" width={200} />
    </div>
    <div style={{ flexGrow: 4, paddingRight: '36px' }}>
      <div>
        <h4>
Title:
          {episode.title}
        </h4>
      </div>
      <div>
        <h4>
Release Date:
          {episode.released}
        </h4>
      </div>
      <div>
        <h4>
Director:
          {episode.directors}
        </h4>
      </div>
      <div>
        <h4>
Actors:
          {episode.actors}
        </h4>
      </div>
      <div>
        <h4>
Plot:
          {episode.plot}
        </h4>
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
