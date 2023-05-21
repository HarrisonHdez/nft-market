"use client"

import Image from 'next/image'
import styles from '../page.module.css'
import Link from 'next/link';
import { useState } from 'react';






const FormRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar las acciones necesarias con los datos del formulario
    console.log(email);
    console.log(password);

    setEmail('')
    setPassword('')
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  


  return (
    <main className={styles.main}>
      <section className={`${styles.main__content} animate__animated animate__fadeIn`}>
        <div className={styles.form__container}>
          <Image
            width={135}
            height={32}
            src="images/logo.svg"
            alt="logo"
            priority={true}
            className={styles.form__logo}
          />
          <div className={styles.form__logo_container}>
            <Image
              width={91}
              height={63}
              src="images/logo-mobile.svg"
              alt="logo"
              priority={true}
              className={styles.form__logo_mobile}
            />
          </div>
          <form action="" className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form__title_container}>
              <h2 className={styles.form__title}>NFT Register</h2>
              <p className={styles.form__subtitle}>
                Please enter your information to register
              </p>
            </div>

            <div>
              <div className={styles.form__input_container}>
                <div className={styles.form__group1}>
                  <div className={styles.form__group_name}>
                    <label htmlFor="email">Name</label>
                    <input
                      className={styles.placeholder__input}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Name"
                      required
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className={styles.form__group_lastname}>
                    <label htmlFor="email">Last Name</label>
                    <input
                      className={styles.placeholder__input}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Last Name"
                      required
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>

                <div className={styles.form__group}>
                  <label htmlFor="email">Email</label>
                  <input
                    className={styles.placeholder__input}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    required
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>

                <div className={styles.form__group}>
                  <label htmlFor="password">Password</label>
                  <input
                    className={styles.placeholder__input}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className={styles.form__group}>
                  <label htmlFor="password">Confirm Password</label>
                  <input
                    className={styles.placeholder__input}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Confirm Password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>

              <div className={styles.form__group_checkbox}>
                <div className={styles.form__checkbox}>
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox">Accept terms</label>
                </div>
                <Link href="/">Forgot Password?</Link>
              </div>

              <div className={styles.form__buttons_container}>
                <button className={styles.form__signin} aria-label="Sign in">
                  Sign in
                </button>
                <button
                  className={styles.form__google}
                  aria-label="Sign in with Google"
                >
                  <Image
                    width={24}
                    height={24}
                    src="images/google.svg"
                    alt="registro con google image"
                    priority={true}
                  />
                  Sign in with google
                </button>
              </div>

              <p> </p>
              <div className={styles.form__down}>
                <p>You have an account?</p>
                <div className={styles.form__signup}>
                  <Link href="/">Log In</Link>
                </div>
              </div>
            </div>

            <Image
              width={135}
              height={32}
              src="images/barra-footer.svg"
              alt="barra del footer"
              priority={true}
              className={styles.form__barra}
            />
          </form>
        </div>

        <div className={styles.form__image}>
          <Image
            width={768}
            height={896}
            priority={true}
            src="images/image.svg"
            alt="logo"
          />
        </div>
      </section>
    </main>
  );
}

export default FormRegister