import React from 'react'
import PropTypes from 'prop-types'
import moment from "moment";

import Images from './Images';

export const PortfolioPostTemplate = ({
  date,
  photos,
  title,
}) => {
  return (
    <section className="section">
      <div className="container content">
       {!!title && <h1>{title}</h1>}
       <div><small>{moment(date).format('DD.MM.YYYY')}</small></div>
       <Images photos={photos} />
      </div>
    </section>
  )
}

PortfolioPostTemplate.propTypes = {
  date: PropTypes.object,
  photos: PropTypes.array,
  title: PropTypes.string,
}