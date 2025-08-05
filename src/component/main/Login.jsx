import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../assert/back.jpg";

const HotelOtpLogin = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("mobile");
  const navigate = useNavigate();
  const fakeOtp = "123456";

  const sendOtp = () => {
    if (/^\d{10}$/.test(mobile)) {
      alert(`📲 OTP sent to ${mobile}\n\n(Use this OTP for demo: ${fakeOtp})`);
      setStep("otp");
    } else {
      alert("⚠️ Please enter a valid 10-digit mobile number.");
    }
  };

  const verifyOtp = () => {
    if (otp === fakeOtp) {
      navigate("/dash-board");
    } else {
      alert("❌ Incorrect OTP. Please try again.");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay} />
      <div style={styles.loginBox}>
        <h1 style={styles.heading}>HOTEL</h1>
        <h3 style={styles.subheading}>Login</h3>
        {step === "mobile" ? (
          <>
            <input
              style={styles.input}
              type="tel"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
              maxLength={10}
              pattern="\d*"
            />
            <button style={styles.button} onClick={sendOtp}>
              Send OTP
            </button>
          </>
        ) : (
          <>
            <input
              style={styles.input}
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              maxLength={6}
              onPaste={(e) => e.preventDefault()}
              onCopy={(e) => e.preventDefault()}
              onCut={(e) => e.preventDefault()}
            />
            <button style={styles.button} onClick={verifyOtp}>
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: "100vh",
    width: "100%",
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', sans-serif",
  },
  overlay: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  loginBox: {
    position: "relative",
    zIndex: 2,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "40px",
    borderRadius: "15px",
    textAlign: "center",
    width: "320px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "10px",
    letterSpacing: "2px",
    color: "#444",
  },
  subheading: {
    marginBottom: "20px",
    fontSize: "18px",
    color: "#777",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#222",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default HotelOtpLogin;
