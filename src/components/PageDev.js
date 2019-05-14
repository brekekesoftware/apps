import React from 'react';

import LastModified from '../shared/LastModified';

const PageDev = () => (
  <React.Fragment>
    <h1>Brekeke Phone dev</h1>
    <h3>
      <span>iOS </span>
      <small>
        <LastModified url="/0/brekeke_phone.ipa" />
      </small>
    </h3>
    <a href="itms-services://?action=download-manifest&url=https://apps.brekeke.com/0/brekeke_phone.plist">
      Install
    </a>
    <br />
    <a href="brekekeapp://open?url=wss%3A%2F%2Fapps.brekeke.com%3A8443%2Fws%2F&tenant=nam&user=nam01">
      Deep link
    </a>
    <h3>
      <span>Android </span>
      <small>
        <LastModified url="/0/brekeke_phone.apk" />
      </small>
    </h3>
    <a href="https://apps.brekeke.com/0/brekeke_phone.apk">Download apk file</a>
    <br />
    <a href="intent://open?url=wss%3A%2F%2Fapps.brekeke.com%3A8443%2Fws%2F&tenant=nam&user=nam01#Intent;scheme=brekekeapp;package=com.brekeke.phone;end">
      Deep link
    </a>
  </React.Fragment>
);

export default PageDev;
