import { useState } from 'react';

import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";

import { addUser } from '../service/api';

const Container = styled(FormGroup)`
    width: 50%;
    margin: auto;
    margin-top: 50px;
    & > div{
        margin-top: 10px;
    }
`
const defaultvalue = {
    Username: '',
    Email: '',
    Category: '',
    Password: '',
}


const AddUser = () => {
    const [user, setUser] = useState(defaultvalue);

    const onvaluechange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const adduserdetails = async () => {
        await addUser(user);
    }

    return (
        <Container>
            <Typography variant="h5">Registration</Typography>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e) => onvaluechange(e)} name="username" type='char' />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onvaluechange(e)} name="email" type='email' />
            </FormControl>
            <FormControl>
                <InputLabel>Category</InputLabel>
                <Input onChange={(e) => onvaluechange(e)} name="category" />
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input onChange={(e) => onvaluechange(e)} name="password" type='password' />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => adduserdetails()}>Register</Button>
            </FormControl>
        </Container>
    );
}

export default AddUser;


// import styled from "styled-components";

// const BackToWebsite = styled.div`
//   position: absolute;
//   top: 0px;
//   left: 25px;
//   font-size: 15px;
//   font-family: Ligconsolata;
//   color: #000;
//   text-align: left;
// `;
// const IoncaretBackSharpIcon = styled.img`
//   position: absolute;
//   top: 1px;
//   left: 0px;
//   width: 15px;
//   height: 15px;
//   overflow: hidden;
// `;
// const BackToWeb = styled.button`
//   cursor: pointer;
//   border: none;
//   padding: 0;
//   background-color: transparent;
//   position: absolute;
//   top: 29px;
//   left: 1092px;
//   width: 138px;
//   height: 16px;
// `;
// const SunsetFieldGameStadium1Icon = styled.img`
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   width: 580px;
//   height: 832px;
//   object-fit: cover;
// `;
// const Welcome = styled.b`
//   position: absolute;
//   top: 67px;
//   left: 632px;
//   font-size: 48px;
// `;
// const RegisterWithGoogleChild = styled.div`
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   border-radius: 24px;
//   background-color: #d9d9d9;
//   width: 460px;
//   height: 48px;
// `;
// const RegisterWithGoogleItem = styled.img`
//   position: absolute;
//   top: 10px;
//   left: 107px;
//   width: 28px;
//   height: 28px;
// `;
// const RegisterWithGoogle1 = styled.b`
//   position: absolute;
//   top: 13px;
//   left: 159px;
//   font-size: 15px;
//   font-family: Literata;
//   color: #000;
//   text-align: left;
// `;
// const RegisterWithGoogle = styled.button`
//   cursor: pointer;
//   border: none;
//   padding: 0;
//   background-color: transparent;
//   position: absolute;
//   top: 697px;
//   left: 700px;
//   width: 460px;
//   height: 48px;
// `;
// const RegisterChild = styled.div`
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   border-radius: 24px;
//   background-color: rgba(0, 0, 0, 0.95);
//   width: 460px;
//   height: 48px;
// `;
// const Register1 = styled.b`
//   position: absolute;
//   top: 13px;
//   left: 196px;
//   font-size: 15px;
//   font-family: Literata;
//   color: #fff;
//   text-align: left;
// `;
// const Register = styled.button`
//   cursor: pointer;
//   border: none;
//   padding: 0;
//   background-color: transparent;
//   position: absolute;
//   top: 565px;
//   left: 701px;
//   width: 460px;
//   height: 48px;
// `;
// const RegistrationFormChild = styled.input`
//   border: none;
//   background-color: #ebebeb;
//   position: absolute;
//   top: 376px;
//   left: 700px;
//   border-radius: 24px;
//   width: 460px;
//   height: 48px;
// `;
// const RegistrationFormItem = styled.input`
//   border: none;
//   background-color: #ebebeb;
//   position: absolute;
//   top: 462px;
//   left: 700px;
//   border-radius: 24px;
//   width: 460px;
//   height: 48px;
// `;
// const RegistrationFormInner = styled.input`
//   border: none;
//   background-color: rgba(224, 224, 224, 0.66);
//   position: absolute;
//   top: 204px;
//   left: 700px;
//   border-radius: 24px;
//   width: 460px;
//   height: 48px;
// `;
// const RectangleInput = styled.input`
//   border: none;
//   background-color: #ebebeb;
//   position: absolute;
//   top: 290px;
//   left: 700px;
//   border-radius: 24px;
//   width: 460px;
//   height: 48px;
// `;
// const Category = styled.b`
//   position: absolute;
//   top: 346px;
//   left: 700px;
// `;
// const Password = styled.b`
//   position: absolute;
//   top: 432px;
//   left: 700px;
// `;
// const Name1 = styled.b`
//   position: absolute;
//   top: 174px;
//   left: 700px;
// `;
// const Email = styled.b`
//   position: absolute;
//   top: 260px;
//   left: 700px;
// `;
// const AlreadyHaveAn = styled.span`
//   font-weight: 600;
//   font-family: Literata;
// `;
// const B = styled.b`
//   font-family: Literata;
// `;
// const LogIn = styled.span`
//   text-decoration: underline;
//   font-weight: 800;
//   font-family: Literata;
// `;
// const AlreadyHaveAnContainer = styled.button`
//   cursor: pointer;
//   border: none;
//   padding: 0;
//   background-color: transparent;
//   position: absolute;
//   top: 644px;
//   left: 737px;
//   font-size: 15px;
//   color: rgba(0, 0, 0, 0.69);
//   text-align: left;
//   display: inline-block;
// `;
// const RegistrationFormRoot = styled.div`
//   position: relative;
//   background-color: #fff;
//   width: 100%;
//   height: 832px;
//   overflow: hidden;
//   text-align: left;
//   font-size: 15px;
//   color: #000;
//   font-family: Literata;
// `;

// const RegistrationForm = () => {
//   return (
//     <RegistrationFormRoot>
//       <BackToWeb>
//         <BackToWebsite>Back to website</BackToWebsite>
//         <IoncaretBackSharpIcon alt="" src="/ioncaretbacksharp.svg" />
//       </BackToWeb>
//       <SunsetFieldGameStadium1Icon
//         alt=""
//         src="/sunsetfieldgamestadium-1@1x.png"
//       />
//       <Welcome>Welcome!</Welcome>
//       <RegisterWithGoogle>
//         <RegisterWithGoogleChild />
//         <RegisterWithGoogleItem alt="" src="/frame-1.svg" />
//         <RegisterWithGoogle1> Register with Google</RegisterWithGoogle1>
//       </RegisterWithGoogle>
//       <Register>
//         <RegisterChild />
//         <Register1>Register</Register1>
//       </Register>
//       <RegistrationFormChild type="text" />
//       <RegistrationFormItem type="text" />
//       <RegistrationFormInner type="text" />
//       <RectangleInput type="text" />
//       <Category>Category</Category>
//       <Password>Password</Password>
//       <Name1>Name</Name1>
//       <Email>Email</Email>
//       <AlreadyHaveAnContainer>
//         <AlreadyHaveAn>already have an account ?</AlreadyHaveAn>
//         <B>{` `}</B>
//         <LogIn>Log in</LogIn>
//       </AlreadyHaveAnContainer>
//     </RegistrationFormRoot>
//   );
// };

// export default RegistrationForm;