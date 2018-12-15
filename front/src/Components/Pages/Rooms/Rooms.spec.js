// import React from "react";
// import { mount } from "enzyme";
// import NavBar from "../../Layout/NavBar"
// import Carousel from "../../Small/Carousel"
// import Footer from '../../Layout/Footer';
// import Room from "../../Small/Room"
// import Rooms from "./Rooms";

// describe("Rooms", () => {
//   let mountedRooms;
//   const rooms = () => {
//     if (!mountedRooms) {
//       mountedRooms = mount(
//         <Rooms />
//       );
//     }
//     return mountedRooms;
//   }

//   it("always renders a NavBar", () => {
//     expect(rooms().find(NavBar).length).toBe(1);
//   });

//   it("always renders a Carousel", () => {
//     expect(rooms().find(Carousel).length).toBe(1);
//   });

//   it("always renders a Footer", () => {
//     expect(rooms().find(Footer).length).toBe(1);
//   });

//   describe("renders Room component", () => {
//         const room1 = {
//             capacity: 16,
//             id: 1,
//             name: "Cameron",
//             price: 45,
//             setup: "Boardroom"
//         }
//         const room2 = {
//             capacity: 6,
//             id: 2,
//             name: "Cameron",
//             price: 58,
//             setup: "Boardroom"
//         }
//         const room3 = {
//             capacity: 6,
//             id: 3,
//             name: "Cameron",
//             price: 58,
//             setup: "Boardroom"
//         }
        
//         const myRooms = rooms().setState({
//             data: [room1, room2, room3]
//         })

//         it("renders as many Room components as in the data array", () => {
//             expect(myRooms.find(Room).length).toBe(myRooms.state('data').length);
//         })

//         it("passes name to room components", () => {
//             const firstRoom = myRooms.find(Room).first();
//             expect(firstRoom.props().name).toBe(myRooms.state('data')[0].name);
//         })

//         it("passes price to room components", () => {
//             const firstRoom = myRooms.find(Room).first();
//             expect(firstRoom.props().price).toBe(myRooms.state('data')[0].price);
//         })

//         it("passes setup to room components", () => {
//             const firstRoom = myRooms.find(Room).first();
//             expect(firstRoom.props().setup).toBe(myRooms.state('data')[0].setup);
//         })

//         it("passes capacity to room components", () => {
//             const firstRoom = myRooms.find(Room).first();
//             expect(firstRoom.props().capacity).toBe(myRooms.state('data')[0].capacity);
//         })
//     })
// })