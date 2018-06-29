import React from 'react';
import PropTypes from 'prop-types';
import Card from './DictionaryCard';
import Loader from '../../../Loader';

const ListDictionaries = ({ dictionaries, fetching }) => {
  if (dictionaries.length >= 1) {
    return (
      <div className="row justify-content-center">
        {dictionaries.map(dictionary => (dictionary.repository_type === 'OpenMRSDictionary' ?
          <Card dictionary={dictionary} key={dictionary.uuid} />
                    :
          <div />))}
      </div>
    );
  }
  if (fetching) {
    return (
      <div className="text-center mt-3">
        <Loader />
      </div>
    );
  }
  return (
    <div className="text-center mt-3">
      <h5>No Dictionaries Found</h5>
    </div>
  );
};

ListDictionaries.PropTypes = {
  fetching: PropTypes.bool.isRequired,
  dictionaries: PropTypes.arrayOf(PropTypes.shape({
    dictionaryName: PropTypes.string,
  })).isRequired,
};
export default ListDictionaries;
