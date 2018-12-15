// import React from "react";
// import { mount } from "enzyme";
// import Room from "./Room";

// describe("Room", () => {
//     let mountedRoom;
//     const room = (props) => {
//         mountedRoom = mount(
//           <Room {...props}/>
//         );
//       return mountedRoom;
//     }

//     it("always displays an image", () => {
//         const images = room().find("img");
//         expect(images.length).toBe(1);
//       });

//     it("shows the image on the left if id is even", () => {
//         const props = {
//             id: 0,
//         };
//         const leftRoom = room(props);
//         const positionDiv = leftRoom.find("#position-div").first();
//         expect(positionDiv.props().className).toBe("col-md-7");   
//     });

//     it("shows the image on the right if id is odd", () => {
//         const props = {
//             id: 1,
//         };
//         const rightRoom = room(props);
//         const positionDiv = rightRoom.find("#position-div").first();
//         expect(positionDiv.props().className).toBe("col-md-7 order-md-2");
//     });

//     it("displays name prop", () => {
//         const props = {
//             name: "name",
//         };
//         const displayRoom = room(props);
//         const nameTag = displayRoom.find("h2");
//         expect(nameTag.props().children).toBe("name");
//     });
//  })