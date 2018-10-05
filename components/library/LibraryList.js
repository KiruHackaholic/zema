import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  _renderRow(library) {
    return <ListItem item={library} />
  }

  render() {
    return (
      <ListView dataSource={this.dataSource}
        renderRow={this._renderRow}
      />
    );
  }
}

const mapStatesToProps = (state) => {
  return { libraries: state.libraries };
};

export default connect(mapStatesToProps)(LibraryList);
