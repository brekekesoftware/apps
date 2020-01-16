import React from 'react';

import LastModified from '../shared/LastModified';

const PageDev = () => (
  <React.Fragment>
    <h1>Brekeke Phone dev</h1>
    <h3>New UI:</h3>
    <a href="itms-services://?action=download-manifest&url=https://apps.brekeke.com/0/brekeke_phone.plist">
      <span>
        Install on iOS <LastModified url="/0/brekeke_phone.ipa" />
      </span>
    </a>
    <br />
    <a href="/0/brekeke_phone.apk">
      <span>
        Download for Android <LastModified url="/0/brekeke_phone.apk" />
      </span>
    </a>
    <br />
    <a href="/0/brekeke_phone_web.zip">
      <span>
        Web zip <LastModified url="/0/brekeke_phone_web.zip" />
      </span>
    </a>
    <h3>Old UI v1:</h3>
    <a href="itms-services://?action=download-manifest&url=https://apps.brekeke.com/0/brekeke_phone_v1.plist">
      <span>
        Install on iOS <LastModified url="/0/brekeke_phone_v1.ipa" />
      </span>
    </a>
    <br />
    <a href="/0/brekeke_phone_v1.apk">
      <span>
        Download for Android <LastModified url="/0/brekeke_phone_v1.apk" />
      </span>
    </a>
  </React.Fragment>
);

export default PageDev;
