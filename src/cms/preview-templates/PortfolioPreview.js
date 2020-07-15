import React from 'react'
import PropTypes from 'prop-types'
import { PortfolioPostTemplate } from '../../components/PortfolioPostTemplate'

const PortfolioPreview = ({ entry }) => {

  return (
    <PortfolioPostTemplate
      title={entry.getIn(['data', 'title'])}
      date={entry.getIn(['data', 'date'])}
      photos={entry.getIn(['data', 'photos'])}
    />
  )
}

PortfolioPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default PortfolioPreview
