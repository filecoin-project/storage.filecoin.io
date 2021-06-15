import * as React from 'react';
import * as Strings from '~/common/strings';

import { css } from '@emotion/react';

import Page from '~/components/Page';

const STYLES_BODY = css`
  padding: 24px;
  line-height: 2.4rem;
`;

const STYLES_TEXT = css`
  font-family: 'mono';
  font-size: 2.4rem;
  line-height: 2.4rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #999;
  letter-spacing: 0.2px;
`;

const STYLES_ACCENT_TEXT = css`
  font-family: 'mono';
  font-size: 2.4rem;
  line-height: 2.4rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 0.2px;
`;

export const getServerSideProps = async (context) => {
  return {
    props: { ...context.query },
  };
};

export default class IndexPage extends React.Component {
  render() {
    return (
      <Page>
        <div css={STYLES_BODY}>
          <p css={STYLES_TEXT}>
            Updated on {Strings.toDateSinceEpoch(this.props.epoch)}{' '}
            <a href="https://file.app" style={{ color: '#fff' }}>
              (Get more data)
            </a>
          </p>
          <br />
          <p css={STYLES_ACCENT_TEXT}>{this.props.total_unique_cids.toLocaleString()}</p>
          <p css={STYLES_TEXT}>Total unique CIDs</p>
          <br />
          <p css={STYLES_ACCENT_TEXT}>{this.props.total_unique_providers.toLocaleString()}</p>
          <p css={STYLES_TEXT}>Total unique providers</p>
          <br />
          <p css={STYLES_ACCENT_TEXT}>{this.props.total_unique_clients.toLocaleString()}</p>
          <p css={STYLES_TEXT}>Total unique clients</p>
          <br />
          <p css={STYLES_ACCENT_TEXT}>{this.props.total_num_deals.toLocaleString()}</p>
          <p css={STYLES_TEXT}>Total storage deals</p>
          <br />
          <p css={STYLES_ACCENT_TEXT}>
            {this.props.total_stored_data_size.toLocaleString()} BYTES ({Strings.bytesToSize(this.props.total_stored_data_size, 4)})
          </p>
          <p css={STYLES_TEXT}>Total data stored</p>
        </div>
      </Page>
    );
  }
}
