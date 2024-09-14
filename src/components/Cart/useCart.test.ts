import { expect, test } from "vitest";
import { useCart } from "./useCart";
import { renderHook, act } from "@testing-library/react-hooks";

test("the useCart hook get and set", async () => {
  const { result } = renderHook(() =>
    useCart((state) => ({
      amount: state.amount,
      updateAmount: state.updateAmount,
    })),
  );

  expect(result.current.amount).toBe(0);

  act(() => {
    result.current.updateAmount(10);
  });

  expect(result.current.amount).toBe(10);
});
