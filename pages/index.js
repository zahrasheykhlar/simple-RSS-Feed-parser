import React from 'react'
import RssFeedParserForm from '../components/RssFeedParserForm'

import { Container, Row, Col } from 'reactstrap'

class Index extends React.Component {
  render () {
    return (
      <Container>
        <Row>
          <Col md="12">
            <RssFeedParserForm />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Index
