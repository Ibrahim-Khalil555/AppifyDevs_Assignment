import { useDispatch, useSelector } from "react-redux";
import { setDateRange, setUserType } from "../../redux/filterSlice";
import type { RootState } from "../../redux/store";

const FilterBar = () => {
  const dispatch = useDispatch();
  const { dateRange, userType } = useSelector(
    (state: RootState) => state.filter,
  );

  return (
    <div className="flex gap-4 mb-4 items-center">
      <select
        className="p-2 border rounded"
        value={dateRange}
        onChange={(e) => dispatch(setDateRange(e.target.value))}
      >
        <option value="last7days">Last 7 days</option>
        <option value="last30days">Last 30 days</option>
        <option value="last12months">Last 12 months</option>
      </select>

      <select
        className="p-2 border rounded"
        value={userType}
        onChange={(e) => dispatch(setUserType(e.target.value))}
      >
        <option value="all">All Users</option>
        <option value="free">Free</option>
        <option value="premium">Premium</option>
        <option value="enterprise">Enterprise</option>
      </select>
    </div>
  );
};

export default FilterBar;
