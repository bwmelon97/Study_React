import styled from 'styled-components';

export const GithubUsernameForm = styled.form`
    width: 400px;
    display: flex;
    align-items: center;
    height: 32px;
    margin: 0 auto;
    margin-top: 16px;
    margin-bottom: 48px;
`;

export const FormInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    font-size: 21px;
    height: 100%;
    margin-right: 1rem;
`;

export const FormButton = styled.button`
    background: black;
    color: white;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    padding-left: 16px;
    padding-right: 16px;
    height: 100%;
    font-weight: bold;

    :hover {
        background: #495057;
    }
`;