import humanizeDuration from 'humanize-duration';
import { observable, runInAction } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import 'whatwg-fetch';

@observer
class LastModified extends React.Component {
  @observable duration = null;

  componentDidMount() {
    window
      .fetch(this.props.url, {
        method: 'HEAD',
      })
      .then(res => {
        const lm = res.headers.get('Last-Modified');
        if (!lm) {
          return;
        }
        runInAction(() => {
          this.duration = humanizeDuration(
            Date.now() - new Date(lm).getTime(),
            {
              largest: 1,
              round: true,
            },
          );
        });
      });
  }

  render() {
    return this.duration && `(Updated ${this.duration} ago)`;
  }
}
export default LastModified;
