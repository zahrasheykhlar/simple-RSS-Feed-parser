import React from 'react';
import Pagination from '../components/Pagination';
import Map from '../components/Map';

const makeListItem =(item, index, array) => {
              return (<article>
                      <h4>
                        <a href="${item.querySelector('link').innerHTML}" target="_blank" rel="noopener">
                          {item.querySelector("title").innerHTML}
                        </a>
                      </h4>
                    </article>
                  );
}

class RssList extends React.Component {
    constructor(props) {
        super(props);

        var items = this.props.items;
       
        this.state = {
            items: items,
            pageOfItems: []
        };

        this.changePage = this.changePage.bind(this);
    }

    changePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
               return (
                    <div>

                       {
                       this.state.pageOfItems.mymap(makeListItem)
                       }
                       <Pagination items={this.state.items} changePage={this.changePage} />

                    </div>         
            );
    }
}

export default RssList;