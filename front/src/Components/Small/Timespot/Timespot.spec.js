// import React from "react";
// import { mount } from "enzyme";
// import Timespot from "./Timespot";

// describe("Timespot", () => {
//     let mountedTimespot;
//     const timespot = (props) => {
//         mountedTimespot = mount(
//           <Timespot {...props}/>
//         );
//       return mountedTimespot;
//     }

//     it("always renders a button", () => {
//         const buttons = timespot().find("button");
//         expect(buttons.length).toBe(1);
//       });

//     it("the button is active if reserved is false", () => {
//         const props = {
//             reserved: false,
//         };
//         const availableSpot = timespot(props);
//         const myButton = availableSpot.find("button").first();
//         expect(myButton.props().className).toBe("dropdown-item")
//       });

//     it("the button is not active if reserved is true", () => {
//         const props = {
//             reserved: true,
//         };
//         const reservedSpot = timespot(props);
//         const myButton = reservedSpot.find("button").first();
//         expect(myButton.props().className).toBe("dropdown-item disabled")
//       });

//     it("renders hours property as its children", () => {
//         const props = {
//             hours: "11:00 - 12:00" 
//         };
//         const hoursDisplay = timespot(props);
//         const myButton = hoursDisplay.find("button").first();
//         expect(myButton.props().children).toBe(props.hours);
//     });

//     it("calls handleHourChange when active", () => {
//         const props = {
//             reserved: false,
//             handleHourChange: jest.fn()
//         };
//         const clickable = timespot(props);
//         clickable.find("button").first().simulate('click');
//         expect(props.handleHourChange).toHaveBeenCalled();
//       });

//     it("does not call handleHourChange when not active", () => {
//         const props = {
//             reserved: true,
//             handleHourChange: jest.fn()
//         };
//         const nonClickable = timespot(props);
//         nonClickable.find("button").first().simulate('click');
//         expect(props.handleHourChange).not.toHaveBeenCalled();
//     });
// });
