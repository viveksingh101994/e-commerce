import { takeLatest, put } from "redux-saga/effects";

import { UserActionTypes } from "../user/user.types";
import { clearCart } from "./cart.actions";
import { clearCartOnSignOut, onSignOutSuccess } from "./cart.sagas";

describe("clear cart on signout saga", () => {
  it("should fire clearCart", () => {
    const generator = clearCartOnSignOut();
    expect(generator.next().value).toEqual(put(clearCart()));
  });
});
