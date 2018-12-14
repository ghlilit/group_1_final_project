import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Footer", () => {

    it("does not change over time", () => {
        const wrapper = shallow(
            <Footer />
        );
        expect(wrapper).toMatchSnapshot();
    })

});