import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/contacts/sliceFilter';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = ({target}) => dispatch(setStatusFilter(target.value));

    return(
      <>
        <p className={css.p}>Find contacts by name</p>
        <input
        className={css.input}
        onChange={handleFilterChange}
        type='text'
        name='filter'
        />
      </>
    )
}

export { Filter }