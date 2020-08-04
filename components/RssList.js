import React from 'react';
import Pagination from '../components/Pagination';

const makeListItem =(item) => {
              return `<article>
                      <h4>
                        <a href="${item.querySelector("link").innerHTML}" target="_blank" rel="noopener">
                          ${item.querySelector("title").innerHTML}
                        </a>
                      </h4>
                    </article>
                  `;
}

Array.prototype.mymap = function(makeListItem){
    let html = ``;
    for (let i = 0; i < this.length; i++) {
                  html += makeListItem(this[i]);
                };
    return html;
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

                       <div dangerouslySetInnerHTML={{__html: this.state.pageOfItems.mymap(makeListItem)}} ></div>

                       <Pagination items={this.state.items} changePage={this.changePage} />

                    </div>         
            );
    }
}

export default RssList;