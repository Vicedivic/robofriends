import React from "react";
import { mount } from "enzyme";
import ErrorBoundry from "./ErrorBoundry";

describe("ErrorBoundry", () => {
  const errorboundry = mount(<ErrorBoundry><h1>App</h1></ErrorBoundry>);

  it("shows children if there is no error", () => {
    expect(errorboundry.find("h1").text()).toEqual("App");
  });

  describe("when there is an error", () => {
    beforeEach(() => {
      errorboundry.instance().componentDidCatch("test", {});
    });

    it("sets the `hasError state` to true", () => {
      expect(errorboundry.state().hasError).toBe(true);
    });

    it("shows an error if there is an error", () => {
      expect(errorboundry.find("h1").text()).toEqual("Ooooops. That is not good");
    });
  });
});