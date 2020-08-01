import React from 'react';
import RssFeedParserForm from '../components/RssFeedParserForm';
//import List from 'react-list';


import {Row, Col} from 'reactstrap';

class Index extends React.Component {
  render() {
    return(
    		<Row>
	    		<Col md="6">
					<RssFeedParserForm />
				</Col>
			</Row>
    	) 
  }
}

export default Index;