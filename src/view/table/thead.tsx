import { h } from 'preact';

import { TR } from './tr';
import { BaseComponent, BaseProps } from '../base';
import { TH } from './th';
import { className } from '../../util/className';
import Header from '../../header';
import Pipeline from '../../pipeline/pipeline';

interface THeadProps extends BaseProps {
  pipeline: Pipeline<any>;
  header: Header;
}

export class THead extends BaseComponent<THeadProps, {}> {
  render() {
    if (this.props.header) {
      return (
        <thead key={this.props.header.id} className={className('thead')}>
          <TR>
            {this.props.header.columns.map((col, i) => {
              return (
                <TH pipeline={this.props.pipeline} column={col} index={i} />
              );
            })}
          </TR>
        </thead>
      );
    }

    return null;
  }
}
