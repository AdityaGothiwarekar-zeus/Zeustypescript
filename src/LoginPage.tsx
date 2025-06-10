import React, { useState, FormEvent, ChangeEvent, MouseEvent } from 'react';
import './style.css';

const LoginPage: React.FC = () => {

  const [schoolType, setSchoolType] = useState<'district' | 'independent'>('district');
  const [remember, setRemember] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      alert('Please fill in all required fields.');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const togglePassword = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const preventDefault = (e: MouseEvent<HTMLAnchorElement>): void => e.preventDefault();

  return (
    <div className="container">
      <div className="header-nav">
        <div className="header">
          <div className="logoheader">
            <img src="assets/icons/logo used in header.svg" alt="Logo" />
          </div>
        </div>
      </div>

      <div className="content">
        <div className="login-container">
          <div className="login-header">
            <img src="assets/icons/back.svg" alt="Back" className="back-arrow" />
            <h2>Log in with Quantum</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="radio-buttons">
              <label className="custom-radio">
                <input
                  type="radio"
                  name="schoolType"
                  value="district"
                  checked={schoolType === 'district'}
                  onChange={() => setSchoolType('district')}
                />
                <img
                  src={
                    schoolType === 'district'
                      ? 'assets/icons/radio-button-on.svg'
                      : 'assets/icons/radio-button-off.svg'
                  }
                  alt={schoolType === 'district' ? 'Checked' : 'Unchecked'}
                  className="radio-icon"
                />
                District
              </label>
              <label className="custom-radio">
                <input
                  type="radio"
                  name="schoolType"
                  value="independent"
                  checked={schoolType === 'independent'}
                  onChange={() => setSchoolType('independent')}
                />
                <img
                  src={
                    schoolType === 'independent'
                      ? 'assets/icons/radio-button-on.svg'
                      : 'assets/icons/radio-button-off.svg'
                  }
                  alt={schoolType === 'independent' ? 'Checked' : 'Unchecked'}
                  className="radio-icon"
                />
                Independent School
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="state">State*</label>
              <select id="state" name="state">
                <option value="">Alabama</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="district">District*</label>
              <select id="district" name="district">
                <option value="">Alabama School District</option>
              </select>
            </div>

            <div className="form-group username-group" style={{ marginTop: '10px' }}>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username/Email ID*"
                value={username}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
              />
              <a href="#" className="forgot-link" onClick={preventDefault}>FORGOT USERNAME?</a>
            </div>

            <div className="form-group password-group">
              <div className="password-wrapper">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Password*"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
                <span className="toggle-password" onClick={togglePassword} style={{ cursor: 'pointer' }}>
                  <img
                    src={passwordVisible ? 'assets/icons/hide.svg' : 'assets/icons/preview.svg'}
                    alt="Toggle Password"
                    width="20"
                    height="20"
                  />
                </span>
              </div>
              <a href="#" className="forgot-link" onClick={preventDefault}>FORGOT PASSWORD?</a>
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label custom-checkbox">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
                <img
                  src={remember ? 'assets/icons/checkbox-checked.svg' : 'assets/icons/checkbox-unchecked.svg'}
                  alt="Checkbox"
                  className="checkbox-icon"
                />
                <span>Remember Me</span>
              </label>
            </div>

            <div className="form-group">
              <button type="submit" className="btn">LOG IN</button>
            </div>
          </form>
        </div>
      </div>

      <div className="footer-links">
        <a href="#">About</a>
        <span style={{ color: '#838585', fontWeight: 'normal', fontSize: '20px' }}>|</span>
        <a href="#">Contact Us</a>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <img src="assets/icons/logo used in footer.svg" alt="Quantum Logo" className="footer-logo" />
          <span className="footer-separator">|</span>
          <p className="footer-text">Copyright © 2020–2021</p>
          <p className="footer-text company-name"><strong>Zeus Systems Pvt. Ltd.</strong></p>
          <p className="footer-text">All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
