import React from 'react'
import '../components/CustomPrototypes'
import PropTypes from 'prop-types'

const defaultProps = {
  startIndex: 1,
  pageSize: 5
}

class Pagination extends React.Component {
  constructor (props) {
    super(props)
    this.state = { pager: {} }
  }

  

  increase (currentIndex, index) {
    return (index + 1)
  }

  setCurrentItems (currentIndex) {
    var { items, pageSize } = this.props

    var totalPages = Math.ceil(items.length / pageSize)

    var startIndex = (currentIndex - 1) * pageSize
    var endIndex = Math.min(startIndex + pageSize - 1, items.length - 1)

    var pages = [...Array(totalPages).keys()].mymap(this.increase)

    var currentItems = items.myslice(startIndex, endIndex + 1)

    this.setState({
      pager: {
        startPage: 1,
        endPage: totalPages,
        totalItems: items.length,
        currentIndex: currentIndex,
        pageSize: pageSize,
        totalPages: totalPages,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
      }
    })

    this.props.changePage(currentItems)
  }
  makePager = (currentIndex, index) => {
    return (<li key={index}>
      <a className="clickable" onClick={() => this.setCurrentItems(currentIndex)}> &nbsp;{currentIndex} | </a>
    </li>)
  }
  componentDidUpdate (_props, _state) {
    if (this.props.items !== _props.items) {
      this.setCurrentItems(this.props.startIndex)
    }
  }

  componentWillMount () {
    if (this.props.items && this.props.items.length) {
      this.setCurrentItems(this.props.startIndex)
    }
  }

  render () {
    var pager = this.state.pager
    return (
      <ul className="pagination">
        {
          pager.pages.mymap(this.makePager)
        }
      </ul>
    )
  }
}

Pagination.propTypes = {
  items: PropTypes.Array,
  pageSize: PropTypes.number,
  changePage: PropTypes.function,
  startIndex: PropTypes.number
}
Pagination.defaultProps = defaultProps
export default Pagination
