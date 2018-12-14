import React from "react";
import { shallow } from "enzyme";
import Pricing from "./Pricing";

describe("Pricing", () => {

    it("does not change over time", () => {
        const wrapper = shallow(
            <Pricing />
        );
        expect(wrapper).toMatchSnapshot();
    })

});