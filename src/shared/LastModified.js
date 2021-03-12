import 'whatwg-fetch'

import humanizeDuration from 'humanize-duration'
import React from 'react'

class LastModified extends React.Component {
  state = {
    duration: '',
  }

  componentDidMount() {
    window
      .fetch(this.props.url, {
        method: 'HEAD',
        headers: new Headers({
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        }),
      })
      .then(res => {
        const lm = res.headers.get('Last-Modified')
        if (!lm) {
          return
        }
        const d = Date.now() - new Date(lm).getTime()
        const duration = humanizeDuration(d, {
          largest: 1,
          round: true,
        })
        this.setState({ duration })
      })
      .catch(err => {
        void err
      })
  }

  render() {
    const { duration } = this.state
    return duration && `(Updated ${duration} ago)`
  }
}
export default LastModified
