// test-setup.js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let mountedFooter;
const footer = () => {
  if (!mountedFooter) {
    mountedFooter = mount(
      <Footer />
    );
  }
  return mountedFooter;
}

beforeEach(() => {
  mountedFooter = undefined;
});

  it("always renders a footer", () => {
      const footers = footer().find("footer");
      expect(footers.length).toBeGreaterThan(0);
  });

  it("contains everything else that gets rendered", () => {
      const footers = footer().find("footer");
      const myFooter = footers.first();
      expect(myFooter.children()).toEqual(footer().children());
  }); 