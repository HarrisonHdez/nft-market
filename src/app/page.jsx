"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import { useState } from 'react';






const Form = () => {
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
      <section className={styles.main__content}>
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
          <form action="" className={styles.form} onSubmit={handleSubmit} >
            <div className={styles.form__title_container}>
              <h2 className={styles.form__title}>NFT Access</h2>
              <p className={styles.form__subtitle}>
                Please fill your detail to access your account.
              </p>
            </div>

            <div>
              <div className={styles.form__input_container}>
                <div className={styles.form__group}>
                  <label htmlFor="email">Email</label>
                  <input
                    className={styles.placeholder__input}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="debra.holt@example.com"
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
              </div>

              <div className={styles.form__group_checkbox}>
                <div className={styles.form__checkbox}>
                  <input 
                  type="checkbox" 
                  id="checkbox" 
                  // required
                  
                  />
                  <label htmlFor="checkbox">Remember me</label>
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
                  Sign in with Google
                </button>
              </div>

              <p> </p>
              <div className={styles.form__down}>
                <p>Don’t have an account?</p>
                <div className={styles.form__signup}>
                  <Link href="/">Sign up</Link>
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
  )
}

export default Form