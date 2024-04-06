import Image from "next/image";
import styles from "./index.module.scss";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { MdOutlineEmail } from "react-icons/md";

const handleSubmit = async (event, router) => {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;

  const result = await signIn("credentials", {
    redirect: false,
    email,
    password,
  });

  if (!result.error) {
    console.log("logged in");
    console.log(result);
    router.push("/habits");
  } else {
    //qua va la risposta che manda un avviso di errore all'utente
    console.error(result.error);
  }
};

export default function Login() {
  const router = useRouter();

  return (
    <div className={styles.login_wrapper}>
      <Image
        className={styles.image}
        src="https://media.istockphoto.com/id/1045368942/it/vettoriale/design-vettoriale-dellicona-del-logo-a-foglia-verde-astratta-set-di-icone-ecologia-icona.jpg?s=612x612&w=0&k=20&c=bJPBK-fZoXISvp-YwGxeuH58tZAoY1KnnHVUoWyVo4c=" //dominio immagine in next config
        alt="logo"
        width="200"
        height="200"
      />
      <div className={styles.title}>
        <h1>
          Let&apos;s start <span className={styles.highlight}>growing</span>{" "}
          together!
        </h1>
      </div>

      <form onSubmit={(event) => handleSubmit(event, router)}>
        <div className={styles.form_wrapper}>
          <p className={styles.text}>E-mail</p>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
          />
        </div>

        <div>
          <p className={styles.text}>Password</p>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button className={styles.button_login} type="submit">
          Log in
        </button>
      </form>
      <div>
        <button className={styles.button_signup}>Sign up</button>
      </div>
    </div>
  );
}
