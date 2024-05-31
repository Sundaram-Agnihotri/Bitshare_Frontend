"use client";
import React, { useState } from "react";
import styles from "@/styles/auth.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");

  const sendOtp = () => {};

  const handleSignup = () => {};

  return (
    <div className={styles.authpage}>
      <div className={styles.authcontainer}>
        <h1>Signup</h1>
        <div className={styles.inputcontaner}>
          <label htmlFor="name">Name</label>
          <input
            type="name"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.inputcontaner1}>
          <label htmlFor="email">Email</label>
          <div className={styles.inputrow}>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={sendOtp}>Send OTP</button>
          </div>
        </div>

        <div className={styles.inputcontaner}>
          <label htmlFor="otp">OTP</label>
          <input
            type="password"
            name="otp"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        <div className={styles.inputcontaner}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className={styles.button1} type="button" onClick={handleSignup}>
          Signup
        </button>
        <Link href="/login">Already have an account?</Link>
      </div>
    </div>
  );
};

export default page;
