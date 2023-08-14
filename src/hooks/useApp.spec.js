import { renderHook, act } from "@testing-library/react-hooks";
import { useApp } from "./useApp";
import { INIT_TODO_LIST } from "../constants/data";

describe(" [Hooksテスト] ", () => {
  describe(" [関数テスト] onChangeAddInputValue", () => {
    test(" [正常系] addInputValueを更新できること", () => {
      const expectedValue = "テスト";
      const eventObject = {
        target: {
          value: expectedValue,
        },
      };
      const { result } = renderHook(() => useApp());
      expect(result.current[0].addInputValue).toBe("");
      act(() => result.current[1].onChangeAddInputValue(eventObject));
      expect(result.current[0].addInputValue).toBe(expectedValue);
    });
  });
  describe(" [関数テスト] handleAddTodo", () => {
    let expectTodoList = [];
    let eventObject = {
      target: {
        value: "テスト",
      },
      key: "Enter",
    };
    beforeEach(() => {
      eventObject = {
        target: {
          value: "テスト",
        },
        key: "Enter",
      };
    });

    test(" [正常系] todoList, uniqueIdが更新されること、addInputValueがリセットされること", () => {
      const expectTodoTitle = "Todo3";
      expectTodoList = INIT_TODO_LIST.concat({
        id: 3,
        title: expectTodoTitle
      });
      eventObject.target.value = expectTodoList;

      const { result } = renderHook(() => useApp());
      expect(result.current[0].addInputValue).toBe("");

      act(() => result.current[1].onChangeAddInputValue(eventObject));
      expect(result.current[0].addInputValue).toBe(expectTodoTitle);

      act(() => result.current[1].handleAddTodo(eventObject));
      expect(result.current[0].todoList).toEqual(expectTodoList);
      expect(result.current[0].addInputValue).toBe("");
    });
    test(" [正常系] エンターキーを押していない場合、処理が発生しないこと", () => {
      const expectTodoTitle = "Todo4";
      expectTodoList = INIT_TODO_LIST.concat({
        id: 3,
        title: expectTodoTitle,
      });
      eventObject.target.value = expectTodoTitle;
      eventObject.key = "";

      const { result } = renderHook(() => useApp());
      expect(result.current[0].addInputValue).toBe("");

      act(() => result.current[1].onChangeAddInputValue(eventObject));
      expect(result.current[0].addInputValue).toBe(expectTodoTitle);

      act(() => result.current[1].handleAddTodo(eventObject));
      expect(result.current[0].todoList).not.toEqual(expectTodoList);
      expect(result.current[0].addInputValue).not.toBe("");
    });
    test(" [正常系] 入力値がない場合、処理が発生しないこと", () => {
      const expectTodoTitle = "Todo5";
      expectTodoList = INIT_TODO_LIST.concat({
        id: 3,
        title: expectTodoTitle,
      });
      eventObject.target.value = "";
      eventObject.key = "";

      const { result } = renderHook(() => useApp());
      expect(result.current[0].addInputValue).toBe("");

      act(() => result.current[1].onChangeAddInputValue(eventObject));
      expect(result.current[0].addInputValue).toBe("");

      act(() => result.current[1].handleAddTodo(eventObject));
      expect(result.current[0].todoList).not.toEqual(expectTodoList);
    });
  });
  describe(" [関数テスト] handleDeleteTodo", () => {
    let expectTodoList = [];
    beforeEach(() => {
      expectTodoList = [];
    });
    test(" [正常系] todoが削除されること", () => {
      const targetId = 1;
      const targetTitle = "テスト";
      window.confirm = jest.fn().mockReturnValueOnce(true);
      expectTodoList = INIT_TODO_LIST.filter((todo) => todo.id !== targetId);

      const { result } = renderHook(() => useApp());
      act(() => result.current[1].handleDeleteTodo(targetId, targetTitle));
      expect(result.current[0].todoList).toEqual(expectTodoList);
    });
    test(" [正常系] confirmでキャンセルをクリックした場合、todoが削除されること", () => {
      const targetId = 1;
      const targetTitle = "テスト";
      window.confirm = jest.fn().mockReturnValueOnce(false);
      expectTodoList = INIT_TODO_LIST;

      const { result } = renderHook(() => useApp());
      act(() => result.current[1].handleDeleteTodo(targetId, targetTitle));
      expect(result.current[0].todoList).toEqual(expectTodoList);
    });
  });
});
