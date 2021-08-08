import React, { useState, useEffect } from 'react';
import { Avatar, Grid } from '@material-ui/core';


import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  return (
    <div className={`header${sticky ? ' sticky' : ''}`}>
      <Navbar light expand="md">
        <Container>
          <Grid item md={5}>
            <NavbarBrand href="/"><img width="90px" height="90px" src="https://fleksa.s3.eu-central-1.amazonaws.com/shop/img/logo/prodtestres.png"></img></NavbarBrand>
          </Grid  >
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Grid item md={7}>
              <Nav className="m-auto" navbar>
                <NavItem >
                  <NavLink className="header-item"  href="/">MENU</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink  className="header-item" href="#discover">DISCOVER</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="header-item" href="#gallery">GALLERY</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="header-item" href="#acontactt">CONTACT</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="header-item" href="#login">LOGIN</NavLink>
                </NavItem>
                <NavItem>
                  <Avatar className="profile" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC9CAMAAACTb6i8AAAAmVBMVEX8dwAViAn////8bgAAgAD+3c3O4M0xQpQtP5MkOJAnOpErPZLs7fT09fn7+/3w8fcSLIxxe7Db3eoAAILDx9waMY2Um8LV2Ofk5vBeaafLzuC7v9d8hbWaoMUAI4mOlr9td65JV54AFoaEjLlSX6Kus9Clqstlb6oAH4gAEYR3gLOBibceNI9CUJqssc8GJ4o6SphPXKEAC4TKTNkdAAAHuUlEQVR4nO2b2ZKjOhJAa/IuYpPANrvA2GaxDXir//+4SYFd6uq+/XjFhCdPRBEG0x3iWEotpD4+CIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCOP8Qbz4+It48QHEi4Vd8OQ6ZI/L/fLI+i73ly3Mki74NRuj0XEthevYUdR03oLlWc5FstqOLrMsxqwgCFymPlr29pgvVqKlXKyPgcOYE+yPjnXxPD9znaYJbMbc4LGUjYVc1KoiMGfAJvE4XPFCvmUc/BhlYDVZ8UUKtYiLhNnMHZkdtDDHh7kmcDTiMNthzhguUawlXLRbi9lZyleDgPmh5esYH1N/NTJ2ixco1wIuqgBbRwFzO0hSdVStBPhsRECJLSVamS+YeRd1xFzXfUC6Vme8VcdKHcJJi59AbVsOG4/GS2bcBdYKe9dEWAe66bxWh376ZjrHq8l4KSI27kwXzbSLVqlQDQFrwCSjUoPNTH2ahIQJTN9WEYsqw2Uz7GIdMPcInphOYtWJSBUl9viXlHgQ/XyfB4PDAsO9iWEXdxxbMgHtJIOrkOCpwx3/alUjhilmwFVAgwPS0ewExayLamSOc8IepJp6kVjViQi9RHhqczUun2/DS5aD4wyzIcOoi/TGxno1dZ0r9ZMLGx/6iOdbD9YML9xVtRDTsDPZxRELjA7HjbrYOdbj+VE0Klh0WA/KI4hDChVGilJFC/54tYzecfcmi2fSBQbOaA3r+YQz9eEUQn7i3iEBu4N0g348NocMSIVvmw2fJl1g14AP6nWzDU81gG4U3rldH8IEdVx61Yzmb1O8i18sNzNYPoMuuJqRN/hBzr1F+tmCuO0gGPxD0p5FfE4h/5wiBK/VcLTAfxCk5gpo0IWMmHObxg+i6FVMyDcVVJ9el8GNVwOcdnDdKAei2k0hI77ZzC7NFdCgi5XrFK/mn7g1Pm57XkEWwwXHWpknGcSfONQUZfS6Kyxty2D0NOjC/lbhq0PtQbyR4EIBO1jB3VtveuDlthdfN4kbu5kbb5lzgb2IjT91+Hq2NTv1kARecs3XJb/mrcAJWxV8DSl4KNXoMzLXk5hzIUfrwdUqxTC0c19RnxgXjai4lLlXYzOB5jCPNNO2LlolbecaDBjmXMQ2c9lU/UXYO49KYqd5vUsYfClDGXq1yO+lD2kYN/ZOzis9Df4bc4s65lz0DrN048+L2znA+XpY+10o81B2foxdbGcfTqvwK2A4LrMuxkpozkVjWZf2xwthNTwyiQ1EhjzHqsHD3b6v5Ldb9jivNVZCcy4e1o/diPDTaanTUw0ET7FmyOk8SX3xrSOxjZXQnIuLcpG0XVkV2d46bD4Pn9umLq8y98EDrBltV2fB5vC5OdiXrK/j7poDD97Sxf7HeiGEl+bq1MewiX0n9rVSqplrmq89/kO9eE8XjeXuv8WLPK6zrEUZMhdTvJDHZoi/xYu8ec948b0fSerofKs87Ee8Zz/iYdjkZXTY9noB5137ETW+sObanw/upZaJEPLeQu23Mn+OLzoOa1k97P7ZrT7edHyB4849jqCEHIoumR612ro41BSx/xx3+mJ/mJ983Q5Fq25+03HnPB/J5SvbJL2fVngxTTo1H2lxPhKEUN/G5Pm9L0N41/nIT/PU8jCkUE7z1AFnqThP9ZNNAX51GvRN7zpPxXmWU79+5DUrsH7I806vX7R3qD5jnLzF4yt45m+7fqHXtaDeqZaSb2qIP9NrBjdR1YCxotuoLpUPczJKuX3bda2v9c6weK53XnEsdYSo4Id1exbVGbvYzVQn/Fo56d93vRMKHGGswbvO0dFX6/1dxOd18PyQwL3AxvO1Dp6Cf7GsN10Hf74fefYTgqkPW/1+5ArrDcZJz3p2NGvg7vu+H8HoObWRiUZV/m6n35thpYjxD/jjlbnWOyYj5wLvU6t++qlX6tf/5X0qm67u1Egs6cu3fp8Ktc0cZ/v1nr18vWcP8HRU79nnbmZ6z27jvWbzlMznXzDre/6Fio6qTkz5F8Uz/wKnIu6b519A8mtejprH67ycYr7Pg9phgfzN//IvYTpf64qzktWcr8X/KV9LPl/Dx++frzWlNI6rRs24fp/H56g8Ptt4UqP5/E58TNfCvvU3+Z1eAoPK77RNjrJmFsj7rX/N+52qCJ/HVXzO+zWe3blMPnin8sGPqVhhdfgpH7xceX6h8sFNxwrFMvsEXLVP4O7cWpj70J/3CUSGe5CZZfaPiCJwmcUclYTRnNSD57c7B65aB3OD3TIbz5baV5RkajeNEzQ727r4Ps9cJ8siW+2k2f+f7SsClcC5tS3mqo1m0Ri99pvdskW20UwsuQ/R75oosh1rxrWjaF8aXLr5hYX3p/p512f7O7vvm10ZLrkhExZ38T/Fx9/Ei48/iRcf/yFekAsNudCQCw250JALDbnQkAsNudCQCw250JALDbnQkAsNudCQCw250JALDbnQkAsNudCQCw250JALDbnQkAsNudCQCw250JALDbnQkAsNudCQCw250JALDbnQkAsNudCQCw250JALDbnQkAsNudCQCw250JALDbnQkAsNudCQCw250JALDbnQkAsNudCQCw250JALDbnQkAsNudD8Fwo0Vns4xZM8AAAAAElFTkSuQmCC"></Avatar>
                </NavItem>
              </Nav>
            </Grid>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;