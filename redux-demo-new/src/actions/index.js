/**
 * 行为的抽象
 */

let nextTodoId = 0;
// 添加
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

// 设置可见
export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

// 切换
export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});