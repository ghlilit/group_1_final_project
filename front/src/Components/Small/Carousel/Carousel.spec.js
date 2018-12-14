import React from "react";
import { shallow } from "enzyme";
import Carousel from "./Carousel";

describe("Carousel", () => {

    it("does not change over time", () => {
        const wrapper = shallow(
            <Carousel />
        );
        expect(wrapper).toMatchSnapshot();
    })

});