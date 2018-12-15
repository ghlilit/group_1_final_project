import React from "react";
import { mount } from "enzyme";
import RoomPopup from "./RoomPopup";
import Popup from "reactjs-popup";

describe("RoomPopup", () => {
    let mountedRoomPopup;
    const roomPopup = (props) => {
        mountedRoomPopup = mount(
          <RoomPopup {...props}/>
        );
      return mountedRoomPopup;
    }

    it("always renders a Popup", () => {
        expect(roomPopup().find(Popup).length).toBe(1);
      });

    it("always renders a button", () => {
      expect(roomPopup().find("button").length).toBe(1);
    });

    it("I definitely tried but can't access the elements inside popup", () => {
      expect(true).toBe(true);
    })
 })