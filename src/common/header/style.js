import styled from 'styled-components';
import logoPic from '../../statics/logo.png'


export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;
// logo is an "a lable", by clicking logo, you will be lead to the main page 
export const Logo = styled.a.attrs({href: '/'})` 
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;

    // this avoid button and NavItem overlap
    padding-right: 70px; 
    box-sizing: border-box;
`

export const NavItem = styled.div`
    line-height: 56px;
    font-size: 17px;
    padding: 0 15px;
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: $969696;
    }
    &.active {
        color: #ea6f5a;
    }
`

export const SearchWrapper = styled.div`
    float: left;


    
    position: relative;
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }

    }

`

export const NavSearch = styled.input.attrs({
    placeholder: 'Search'
})`
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 300px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }


    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #555；

    &::placeholder{
        color: #999;
    }
    &.focused {
        width: 300px;

    }
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.register {
        color: #ec6149;
    }
    &.writing {
        color: #fff;
        background: #ec6149;
    }
`


