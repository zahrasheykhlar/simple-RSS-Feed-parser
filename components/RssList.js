import React from 'react'
import Pagination from '../components/Pagination'
import '../components/CustomPrototypes'
import PropTypes from 'prop-types'

const makeListItem = (item) => {
  return (<article>
    <h4>
      <a href="${item.querySelector('link').innerHTML}" target="_blank" rel="noopener">
        {item.querySelector('title').innerHTML}
      </a>
    </h4>
  </article>
  )
}

class RssList extends React.Component {
  constructor (props) {
    super(props)

    var items = this.props.items

    this.state = {
      items: items,
      pageOfItems: []
    }

    this.changePage = this.changePage.bind(this)
  }

  changePage (pageOfItems) {
    this.setState({ pageOfItems: pageOfItems })
  }

  render () {
    return (
      <div>
        {
          this.state.pageOfItems.mymap(makeListItem)
        }
        <Pagination items={this.state.items} changePage={this.changePage} />
      </div>
    )
  }
}

RssList.propTypes = {
  items: PropTypes.Array
}
export default RssList
