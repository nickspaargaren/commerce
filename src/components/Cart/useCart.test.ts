import { expect, test } from "vitest";
import { useCart } from "./useCart";
import { renderHook, act } from "@testing-library/react-hooks";

test("the useCart hook get and set functions", () => {
  const { result } = renderHook(() =>
    useCart((state) => ({
      amount: state.getAmount(),
      addProduct: state.addProduct,
      deleteProduct: state.deleteProduct,
    })),
  );

  expect(result.current.amount).toBe("0.00");

  act(() => {
    result.current.addProduct({
      id: 1,
      title: "My product",
      price: 599,
    });
    result.current.addProduct({
      id: 2,
      title: "My product 2",
      price: 645,
    });
  });

  expect(result.current.amount).toBe("12.44");

  act(() => {
    result.current.deleteProduct(1);
  });

  expect(result.current.amount).toBe("6.45");
});
