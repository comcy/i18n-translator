import React from 'react';
// project
import LocalesTableRow from './LocalesTableRow';

class LocalesTable extends React.PureComponent {

  /* ------------------------------------------------

   Statics

  ------------------------------------------------ */

  /* ------------------------------------------------

   React Lifecycle

  ------------------------------------------------ */

  constructor (props) {
    super(props);
    this.state = {};
    this._initialized = false;
  }

  componentDidUpdate () {
    if (!this._initialized) {
      // eslint-disable-next-line
      this._initialized = true;
      document.querySelectorAll('.autosize')
        // eslint-disable-next-line
        .forEach(elt => (elt.style.height = `${(elt.scrollHeight)}px`));
    }
  }

  /* ------------------------------------------------

   Privates

  ------------------------------------------------ */

  /* ------------------------------------------------

   Sub Components Render

  ------------------------------------------------ */

  /* ------------------------------------------------

   Render

  ------------------------------------------------ */

  render () {
    const langs = this.props.langs;
    const values = this.props.values;
    const primarykeys = this.props.primarykeys;
    return (
      <table className="application-table"
        style={{
          width: '100%'
        }}>
        <thead style={{
          textAlign: 'center'
        }}>
          <tr>
            <th className="table-cell-ellipsis"
              style={{
                width: '8%',
                padding: '12px',
                textAlign: 'right'
              }}>
              <small>Primary Keys</small>
            </th>
            {langs.map(key => <th key={`header-${key}`}
              style={{
                paddingRight: '0px',
                padding: '12px 12px'
              }}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {primarykeys.map((key, index) =>
            <LocalesTableRow key={`row_${key}`}
              langs={langs}
              primarykey={key}
              odd={Boolean(index % 2)}
              facade={this.props.facade}
              values={values.map(obj => (obj[key] || ''))} />)}
        </tbody>
      </table>
    );
  }
}

LocalesTable.contextTypes = {
  theme: React.PropTypes.object,
  facade: React.PropTypes.object
};

LocalesTable.propTypes = {
  langs: React.PropTypes.array.isRequired,
  values: React.PropTypes.array.isRequired,
  facade: React.PropTypes.object.isRequired,
  primarykeys: React.PropTypes.array.isRequired
};

export default LocalesTable;
