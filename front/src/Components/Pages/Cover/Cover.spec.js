import React from "react";
import { shallow } from "enzyme";
import Cover from "./Cover";

describe("Cover", () => {

    it("does not change over time", () => {
        const wrapper = shallow(
            <Cover />
        );
        expect(wrapper).toMatchSnapshot();
    })

});