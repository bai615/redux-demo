/**
 * 行为的抽象
 */

let nextTodoId = 0;
// 添加
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
};

// 设置可见
export const setVisibility = (filter) => {
    return {
        type: 'SET_VISIBILITY',
        filter
    }
};

// 切换
export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};