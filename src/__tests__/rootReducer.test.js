import React from 'react';
import { RootReducer, initialState } from "../rootReducer";


describe('Root Reducer Tests', () => {
  test('render default state snapshot', () => {
    const action = { type: "" };
    const store = RootReducer(initialState, action);
    expect(store).toMatchSnapshot();
  });

  test('render custom state snapshot', () => {
      const action = { type: "" };
      const store = RootReducer({id: 1, name: test}, action);
      expect(store).toMatchSnapshot();
  });

  test('toggle sidebar action snapshot', () => {
      const action = { type: "TOGGLE_SIDEBAR" };
      const store = RootReducer(initialState, action);
      expect(store).toMatchSnapshot();
  });

  test('set current label action snapshot', () => {
      const action = { type: "SET_CURRENT_LABEL", data: "" };
      const store = RootReducer(initialState, action);
      expect(store).toMatchSnapshot();
  });

   test('edit todo action snapshot', () => {
      const action = { type: "EDIT_TODO", payload: {id: 1, text: "test"} };
      const store = RootReducer(initialState, action);
      expect(store).toMatchSnapshot();
  });

   test('add todo action snapshot', () => {
      const action = { type: "ADD_TODO", data: "test" };
      const store = RootReducer(initialState, action);
      expect(store).toMatchSnapshot();
  });

  test('delete todo action snapshot', () => {
      const action = { type: "DELETE_TODO", payload: {id: 1} };
      const store = RootReducer(initialState, action);
      expect(store).toMatchSnapshot();
  });

  test('add label action snapshot', () => {
      const action = { type: "ADD_LABEL", data: "test" };
      const store = RootReducer(initialState, action);
      expect(store).toMatchSnapshot();
  });

  test('delete label action snapshot', () => {
      const action = { type: "DELETE_LABEL", data: "test" };
      const store = RootReducer(initialState, action);
      expect(store).toMatchSnapshot();
  });

  test('toogle complete action snapshot', () => {
      const action = { type: "TOGGLE_COMPLETE", payload: {id: 1} };
      const store = RootReducer(initialState, action);
      expect(store).toMatchSnapshot();
  });
});
