import * as React from 'react';
import { Helmet } from 'react-helmet';
// @ts-ignore
import { injectIntl, InjectedIntlProps, FormattedMessage } from 'react-intl';
import {WithDataProps} from "./withData";

export interface WithHelmetProps {
  messagePrefix: string;
}

export function withHelmet<T extends WithHelmetProps & WithDataProps>(
  WrappedComponent: React.ComponentType<T>
) {
  return injectIntl(({ intl, ...props }: T & InjectedIntlProps) => (
    <React.Fragment>
      <FormattedMessage id={`${props.messagePrefix}.pageTitle`}>
        {(title: string) => (
          <Helmet>
            <title>
                {title}
            </title>
          </Helmet>
        )}
      </FormattedMessage>

      {/* TODO: this is a (hopefully) temporary workaround to TS generic issues */}
      <WrappedComponent {...props as any} />
    </React.Fragment>
  ));
}
