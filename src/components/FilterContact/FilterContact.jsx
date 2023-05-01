import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './FilterContact.styled';

const FilterContact = ({ value, onChangeFind }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={value} onChange={onChangeFind} />
    </FilterLabel>
  );
};

FilterContact.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFind: PropTypes.func.isRequired,
};

export default FilterContact;