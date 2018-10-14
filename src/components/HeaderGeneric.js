import PropTypes from 'prop-types'
import React from 'react'

const HeaderGeneric = ({title, subTitle}) => (
  <header id="header">
    <h1>{title}</h1>
    {subTitle && <p>{subTitle}</p>}
  </header>
)

HeaderGeneric.propTypes = {
  /** The page title */
  title: PropTypes.string.isRequired,
  /** Optional sub-heading Text displayed below Title  */
  subTitle: PropTypes.string
}

HeaderGeneric.defaultProps = {
  subTitle: null
}

export default HeaderGeneric
