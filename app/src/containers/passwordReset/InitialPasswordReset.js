import React, { useState } from 'react';
import {
  BlueButton,
  Input,
  Wrapper,
} from '../../components/styledComponents/index';
// import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { initial_password_reset } from '../../redux/actions/auth';

const InitialPasswordReset = () => {
  // const InitialPasswordReset = ({ match, initial_password_reset }) => {
  //   const [requestSent, setRequestSent] = useState(false);
  //   const [formData, setFormData] = useState({
  //     new_password: '',
  //     re_new_password: '',
  //     fb_name: '',
  //   });

  //   const { new_password, re_new_password, fb_name } = formData;

  //   const onChange = (e) =>
  //     setFormData({ ...formData, [e.target.name]: e.target.value });

  //   const onSubmit = (e) => {
  //     e.preventDefault();

  //     const uid = match.params.uid;
  //     const token = match.params.token;

  //     initial_password_reset(uid, token, new_password, re_new_password);
  //     setRequestSent(true);
  //   };

  //   if (requestSent) {
  //     return <Redirect to="/admin_menu" />;
  //   }

  return (
    <div className="min-h-100 py-5 py-lg-0 d-flex flex-column justify-content-center align-items-center">
      <Wrapper>
        <h1 className="title mb-4">Formularz resetowania hasła</h1>
        <form
          className="d-flex align-items-center flex-column"
          // onSubmit={(e) => onSubmit(e)}
        >
          <p className="text">Wprowadź nazwę z platformy facebook</p>
          <Input
            id="fb_name"
            type="text"
            className="mb-3 mb-md-4"
            placeholder="np. Adam Kowalski"
            name="fb_name"
            // value={fb_name}
            // onChange={(e) => onChange(e)}
            required
          />
          <p className="text">Podaj nowe hasło</p>
          <Input
            id="password"
            type="password"
            className="mb-3 mb-md-4"
            placeholder="nowe hasło"
            name="new_password"
            // value={new_password}
            // onChange={(e) => onChange(e)}
            required
          />
          <p className="text">Potwierdź nowe hasło</p>
          <Input
            id="password"
            type="password"
            className="mb-3 mb-md-4"
            placeholder="potwierdź nowe hasło"
            name="re_new_password"
            // value={re_new_password}
            // onChange={(e) => onChange(e)}
            required
          />
          <BlueButton type="submit">wyślij</BlueButton>
        </form>
      </Wrapper>
    </div>
  );
};

// export default connect(null, { initial_password_reset })(InitialPasswordReset);
export default InitialPasswordReset;
