import React from 'react';
import RssFeedParserForm from '../components/RssFeedParserForm';
//import List from 'react-list';


//import {Row, Col} from 'reactstrap';

class Index extends React.Component {
  render() {
    return(
    	<div>
			<h1>Simple RSS Feed Parser</h1>
			<RssFeedParserForm />
		</div>
    	) 
  }
}

export default Index;