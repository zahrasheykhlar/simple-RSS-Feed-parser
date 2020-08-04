import React from 'react';
import '../components/CustomPrototypes';

const defaultProps = {
    startIndex: 1,
    pageSize: 5,

}


class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
        }
    makePager =(currentIndex, index, array) => {
                return (<li key={index}>
                        <a className="clickable" onClick={() => this.setCurrentItems(currentIndex)}> &nbsp;{currentIndex} | </a>
                    </li>);
    }


    increase = (currentIndex, index, array) => {
                return (index + 1)};

    setCurrentItems(currentIndex) {
        var { items, pageSize } = this.props;
        var pager = this.state.pager;

        var totalPages = Math.ceil(items.length / pageSize);
           
        var startIndex = (currentIndex - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, items.length - 1);

        var pages = [...Array(totalPages).keys()].mymap(this.increase);
       
        var currentItems = items.myslice(startIndex, endIndex + 1);

        this.setState({ pager: {
            startPage: 1,
            endPage: totalPages,
            totalItems: items.length,
            currentIndex: currentIndex,
            pageSize: pageSize,
            totalPages: totalPages,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        } });

        this.props.changePage(currentItems);
    }

    componentDidUpdate(_props, _state) {
        if (this.props.items !== _props.items) {
            this.setCurrentItems(this.props.startIndex);
        }
    }

    UNSAFE_componentWillMount() {
        if (this.props.items && this.props.items.length) {
            this.setCurrentItems(this.props.startIndex);
        }
    }
    

    render() {
        var pager = this.state.pager;
        console.log("pager ==>>>>", pager);
        return (
            <ul className="pagination">
                {
                    pager.pages.mymap( this.makePager)
                }
            </ul>
        );
    }
}

Pagination.defaultProps = defaultProps;
export default Pagination;