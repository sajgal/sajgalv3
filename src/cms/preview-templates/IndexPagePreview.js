import React from 'react'
import PropTypes from 'prop-types'
import LandingTemplate from '../../components/LandingTemplate';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  const { body, images, title } = data;

  if (data) {
    return (
      <LandingTemplate
        title={title}
        body={body}
        images={images}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
