import styled from "styled-components";
import Logo from "./icons/Logo";
import SearchIcon from "./icons/SearchIcon";

export const HeaderWrapper = styled.header`
  display: flex;
  height: 60px;
  border-bottom: 1px solid var(--light-grey);
  align-items: center;
  .logo-container {
    min-width: 160px;
    background-color: blueviolet;
    position: relative;
    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .search-input-container {
    flex: 1;
    min-width: 361px;
    max-width: 361px;
    // min width - width 768
    //  &media screen and (min-width: 768px and max-width: 991px) {
    //
    //}
    //background-color: cadetblue;
    position: relative;
    .search-input-inner-container {
      width: 90%;
      //background-color: red;
      position: relative;
    }
    input {
      width: 100%;
      height: 46px;
      border-radius: 23px;
      border: none;
      background-color: var(--light-grey);
      padding: 10px 30px;
    }
    span {
      position: absolute;
      right: 0;
      top: 0;
      padding: 10px;
      border-bottom-right-radius: 23px;
      border-top-right-radius: 23px;
      cursor: pointer;
      transition: all 0.1s ease;
      &:before {
        content: "";
        width: 1px;
        height: 70%;
        background-color: var(--light-grey);
        //display: inline-block;
        //position: absolute;
        position: absolute;
        top: 8px;
        left: 0;
      }
      &:hover {
        background-color: lightgray;
      }
    }
  }

  .right-navigation-container {
    flex: 1;
    display: flex;
    height: 46px;
    //max-width: 400px;
    //background-color: brown;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    .nav-icon {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const Header = () => {
  return (
    <div className="container">
      <HeaderWrapper>
        <div className="logo-container col-sm-6 col-md-2">
          <Logo />
        </div>

        <div className="search-input-container d-none d-sm-none d-md-block col-md-6 offset-2">
          <div className="search-input-inner-container">
            <input placeholder="Search accounts and videos" />
            <span>
              <SearchIcon />
            </span>
          </div>
        </div>

        <div className="right-navigation-container col-6 col-md-4">
          <div className="nav-icon">upload</div>
          <div className="nav-icon">message</div>
          <div className="nav-icon">inbox</div>
          <div className="nav-icon">profile</div>
        </div>
      </HeaderWrapper>
    </div>
  );
};

export default Header;
