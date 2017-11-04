import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'

const REFRESH_INTERVAL = 1000

class Timestamp extends React.Component {

  state = {
    timestamp: '',
  }

  async componentDidMount() {
    this.refresh()
    this.refreshTimer = setInterval(this.refresh, REFRESH_INTERVAL)
  }

  refresh = () => {
    this.setState({
      timestamp: moment(this.props.children).fromNow(),
    })
  }

  componentWillUnmount() {
    clearInterval(this.refreshTimer)
  }

  render() {
    return this.state.timestamp
  }
}

Timestamp.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Timestamp
