// const mockHistoryPush = jest.fn();

// jest.mock("react-router-dom", () => ({
//   useHistory: () => ({
//     push: mockHistoryPush, // pushメソッドをダミー関数で上書きする。
//   }),
// }));
// import { render, screen, cleanup } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
function Header() {
  return (
    <div class="header">
      <a href="/" class="header__title">
        HelloMatch
      </a>
    </div>
  );
}
export default Header;
