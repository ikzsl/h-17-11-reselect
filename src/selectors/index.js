import { createSelector } from 'reselect';

// BEGIN (write your solution here)
export const getTasksById = (state) => state.tasks.byId;
export const getTaskIds = (state) => state.tasks.allIds;
export const getCurrentFilterName = (state) => state.tasks.currentFilterName;

export const tasksSelector = createSelector(
  [getTasksById, getTaskIds],
  (byId, allIds) => allIds.map((id) => byId[id])
);

export const filteredTasksSelector = createSelector(
  [tasksSelector, getCurrentFilterName],
  (tasks, filterName) =>
    filterName === 'all' ? tasks : tasks.filter((t) => t.state === filterName)
);
// END
