import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import styled from "styled-components"
import useInput from '../hooks/useInput';

const ButtonWrapper = styled.div`
    margin-top:10px;
`;


const LoginForm = () =>{
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const onSubmitForm = useCallback(() => {
      console.log({
        id, password,
      });
    }, [id, password]);
  
    return (
        <Form onFinish={onSubmitForm} style={{ padding: '10px' }}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" value={id} onChange={onChangeId} required />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input name="user-password" value={password} onChange={onChangePassword} type="password" required />
          </div>
          <ButtonWrapper>
            <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
            <Link href="/signup"><a><Button>회원가입</Button></a></Link>
          </ButtonWrapper>
        </Form>
      );
    };
export default LoginForm