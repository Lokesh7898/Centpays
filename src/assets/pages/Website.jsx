import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/website.css";
import Modal from "../component/Modal";
import Termandcondition from "../Terms&Policies/Termandconditions";
import PrivacyPolicy from "../Terms&Policies/privacyPolicy";
import Cookies from "../Terms&Policies/Cookies";
import axios from "axios";

// import Images
import star from "../media/icon/star.png";
import visa from "../media/image/visa.png";
import curr1 from "../media/icon/curr1.png";
import curr2 from "../media/icon/curr2.png";
import curr3 from "../media/icon/curr3.png";
import curr4 from "../media/icon/curr4.png";
import curr5 from "../media/icon/curr5.png";
import curr6 from "../media/icon/curr6.png";
import curr7 from "../media/icon/curr7.png";
import curr8 from "../media/icon/curr8.png";
import curr9 from "../media/icon/curr9.png";
import discover from "../media/image/Ds.png";
import unionpay from "../media/image/UC.png";
import jcb from "../media/image/JCB card.png";
import curr10 from "../media/icon/curr10.png";
import curr11 from "../media/icon/curr11.png";
import curr12 from "../media/icon/curr12.png";
import curr13 from "../media/icon/curr13.png";
import curr14 from "../media/icon/curr14.png";
import curr15 from "../media/icon/curr15.png";
import curr16 from "../media/icon/curr16.png";
import curr17 from "../media/icon/curr17.png";
import curr18 from "../media/icon/curr18.png";
import curr19 from "../media/icon/curr19.png";
import curr20 from "../media/icon/curr20.png";
import pcidss from "../media/image/pci-dss.png";
import server_ic from "../media/icon/server.png";
import mastercard from "../media/image/mastercard.png";
import api_ic from "../media/icon/API_Integration.png";
import aboutimage from "../media/image/aboutimage.jpg";
import aboutimage1 from "../media/image/aboutimage1.jpg";
import aboutimage2 from "../media/image/aboutimage2.jpg";
import aboutimage3 from "../media/image/aboutimage3.jpg";
import aboutimage4 from "../media/image/aboutimage4.jpg";
import aboutimage5 from "../media/image/aboutimage5.jpg";
import aboutimage6 from "../media/image/aboutimage6.jpeg";
import loginwhite_ic from "../media/icon/login_white.png";
import moeny_ic from "../media/icon/money_processing.png";
import signupwhite_ic from "../media/icon/signup_white.png";
import dashboard_ic from "../media/icon/db_proccessing.png";
import companyFullLogo from "../media/image/centpays_full_logo.png";

// import Videosd
import Cashier from "../media/video/Casier.mp4";

import loopVideo from "../media/video/loop.webm";

import cards_vd from "../media/video/cards.gif";
import apms_video from "../media/video/apms.mp4";
import diagram from "../media/video/diagram.gif";
import feilds_vd from "../media/video/feilds.gif";

import introVideo from "../media/video/intro.webm";

import crypto_video from "../media/video/crypto.mp4";
import wiredcoins from "../media/video/wiredcoins.gif";
import wiredglobe from "../media/video/wiredglobe.gif";
import wiredstars from "../media/video/wiredstars.gif";
import cards_video from "../media/video/creditcard.mp4";
import integration_vd from "../media/video/integration.gif";
import whitelable_video from "../media/video/whitelable.mp4";
import dashinsights_vd from "../media/video/dashinsights.gif";
import wiredinterface from "../media/video/wiredinterface.gif";

// import components
import CPGlobe from "../component/Cp_Globe";
import { Canvas } from "react-three-fiber";

class Website extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
      navbarColor: "white",
      currentImageIndex: 0,
      images: [cards_vd, dashinsights_vd, feilds_vd, integration_vd],
      isUserClicked: false,
      currentText: "",
      currenciesCount: 0,
      paymentMethodsCount: 0,
      countriesCount: 0,
      customersCount: 0,
      modalOpen: false,
      openIcon: null,
      screen: "",
      isSocialMediaToggled: false,
      aboutimages: [
        aboutimage,
        aboutimage1,
        aboutimage2,
        aboutimage3,
        aboutimage4,
        aboutimage5,
        aboutimage6,
      ],
      currentSlide: 0,
      isMobileMenuOpen: false,
      heading: "",
      name: "",
      skypeID: "",
      email: "",
      message: "",
    };
    this.introVideoRef = React.createRef();
    this.loopVideoRef = React.createRef();
    this.aboutRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.earthRef = React.createRef();
    this.toggleiconlink = this.toggleiconlink.bind(this);
  }

  toggleMobileMenu = () => {
    const { isMobileMenuOpen } = this.state;
    this.setState({ isMobileMenuOpen: !isMobileMenuOpen });
  };

  // toggleMobileMenu = () => {
  //   this.setState((prevState) => ({
  //     isMobileMenuOpen: !prevState.isMobileMenuOpen,
  //   }));
  // };

  toggleiconlink(icon) {
    this.setState((prevState) => ({
      isSocialMediaToggled: !prevState.isSocialMediaToggled,
    }));
    this.setState({ openIcon: icon });
  }

  componentDidMount() {
    const introVideo = this.introVideoRef.current;
    const loopVideo = this.loopVideoRef.current;
    this.words = ["Fast...", "Secure...", "Efficient..."];
    this.wordIndex = 0;
    this.typingSpeed = 150; // Adjust the typing speed (in milliseconds)
    this.typeNextWord();

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntroVideoEnd = () => {
      introVideo.style.display = "none";
      loopVideo.style.display = "block";
      loopVideo.play();
    };

    introVideo.addEventListener("ended", handleIntroVideoEnd);
    window.addEventListener("scroll", this.handleScroll);
    this.startImageLoop();
    this.observer = new IntersectionObserver(this.handleIntersection, options);
    if (this.aboutRef.current) {
      this.observer.observe(this.aboutRef.current);
    }

    if (this.earthRef.current) {
      this.observer.observe(this.earthRef.current);
    }

    this.intervalId = setInterval(() => {
      // Increment the current slide index
      this.setState((prevState) => ({
        currentSlide:
          (prevState.currentSlide + 1) % this.state.aboutimages.length,
      }));
    }, 3000);
  }

  componentWillUnmount() {
    if (this.aboutRef.current) {
      this.observer.unobserve(this.aboutRef.current);
    }

    const introVideo = this.introVideoRef.current;
    introVideo.removeEventListener("ended", this.handleIntroVideoEnd);
    window.removeEventListener("scroll", this.handleScroll);

    clearInterval(this.imageLoopInterval);
    clearInterval(this.typingInterval);
    clearInterval(this.intervalId);
  }

  handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === this.aboutRef.current) {
          this.setState({ isVisible: true });
        } else if (!this.state.hasScrolledToSection) {
          this.setState({ hasScrolledToSection: true });
        }
        observer.unobserve(entry.target);
      }
    });
  };

  animateCounter = (counterName, targetCount, duration) => {
    let startTime;

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = (targetCount / duration) * progress;
      const updatedCount = Math.min(increment, targetCount);

      this.setState({ [counterName]: Math.floor(updatedCount) });

      if (progress < duration) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  typeNextWord() {
    this.typingInterval = setInterval(() => {
      const currentWord = this.words[this.wordIndex];
      const currentLength = this.state.currentText.length;

      if (currentLength < currentWord.length) {
        this.setState({
          currentText: currentWord.substring(0, currentLength + 1),
        });
      } else {
        clearInterval(this.typingInterval);
        setTimeout(() => {
          this.deleteCurrentWord();
        }, 500); // Adjust the pause before deleting (in milliseconds)
      }
    }, this.typingSpeed);
  }

  deleteCurrentWord() {
    this.typingInterval = setInterval(() => {
      const currentLength = this.state.currentText.length;

      if (currentLength > 0) {
        this.setState({ currentText: this.state.currentText.slice(0, -1) });
      } else {
        clearInterval(this.typingInterval);
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
        setTimeout(() => {
          this.typeNextWord();
        }, 100); // Adjust the pause before typing the next word (in milliseconds)
      }
    }, this.typingSpeed);
  }

  copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }

  handleScroll() {
    const scrollPosition = window.scrollY;
    const darkColorThreshold = 750;
    const body = document.body;

    const scrollline = document.querySelector(".products-ruler");
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const percentScrolled =
      (scrollPosition / (fullHeight - windowHeight)) * 100;

    scrollline.style.height = percentScrolled + "%";

    if (
      scrollPosition > darkColorThreshold ||
      body.classList.contains("dark-bg")
    ) {
      this.setState({ navbarColor: "black" });
    } else {
      this.setState({ navbarColor: "white" });
    }
    const earthSection = document.querySelector(".earth-content");
    if (earthSection && !this.state.hasScrolledToSection) {
      const earthSectionTop = earthSection.offsetTop;
      const earthSectionHeight = earthSection.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;

      if (
        scrollY > earthSectionTop - windowHeight &&
        scrollY <= earthSectionTop + earthSectionHeight
      ) {
        this.setState({ hasScrolledToSection: true });

        const interval = setInterval(() => {
          this.setState((prevState) => ({
            currenciesCount: Math.min(prevState.currenciesCount + 4, 100),
            paymentMethodsCount: Math.min(
              prevState.paymentMethodsCount + 2,
              50
            ),
            countriesCount: Math.min(prevState.countriesCount + 4, 100),
            customersCount: Math.min(prevState.customersCount + 8, 200),
          }));

          // Stop interval when counts reach 100
          if (
            this.state.currenciesCount === 100 &&
            this.state.paymentMethodsCount === 50 &&
            this.state.countriesCount === 100 &&
            this.state.customersCount === 200
          ) {
            clearInterval(interval);
          }
        }, 100);
      }
    }
  }

  handleScrollCircle = () => {
    if (window.scrollY > window.innerHeight - 40) {
      this.setState({ animate: true });
      window.removeEventListener("scrollCircle", this.handleScrollCircle);
    }
  };

  nextImage = () => {
    const { currentImageIndex, images } = this.state;
    const nextIndex = (currentImageIndex + 1) % images.length;
    this.setState({ currentImageIndex: nextIndex });
  };

  handleImageClick = (index) => {
    this.setState({ currentImageIndex: index, isUserClicked: true });
    this.stopImageLoop();

    setTimeout(() => {
      this.setState({ isUserClicked: false });
      this.startImageLoop(); // Resume automatic transition
    }, 4000);
  };

  stopImageLoop = () => {
    clearInterval(this.imageLoopInterval);
  };

  startImageLoop = () => {
    this.imageLoopInterval = setInterval(() => {
      if (!this.state.isUserClicked) {
        this.nextImage();
      } else {
        setTimeout(() => {
          this.setState({ isUserClicked: false });
        }, 4000);
      }
    }, 4000); // Adjust the interval as needed (in milliseconds)
  };

  handleModalOpen = (i) => {
    this.setState({ modalOpen: true });
    this.setState({ screen: i });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  handleDecline = () => {
    this.setState({ modalOpen: false });
  };

  handleAccept = () => {
    this.setState({ modalOpen: false });
  };

  handleFooterdata = (index) => {
    switch (index) {
      case 1:
        return <Termandcondition />;
      case 2:
        return <PrivacyPolicy />;
      case 3:
        return <Cookies />;
      default:
        return null;
    }
  };

  renderHeading = (index) => {
    switch (index) {
      case 1:
        return "Terms and Conditions";
      case 2:
        return "Privacy Policy";
      case 3:
        return "Cookies Policy";
      default:
        return null;
    }
  };

  changeHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { name, skypeID, email, message } = this.state;
      const formData = [
        [name, skypeID, email, message, new Date().toLocaleString()],
      ];

      const response = await axios.post(
        "https://v1.nocodeapi.com/centpays/google_sheets/UVnHQAIMhLIVyVdy?tabId=Sheet1",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data); // Handle success response

      // Optionally, reset the form after successful submission
      this.setState({
        name: "",
        skypeID: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response ? error.response.data : error.message
      ); // Log detailed error message
    }
  };

  render() {
    const {
      navbarColor,
      isVisible,
      currentImageIndex,
      images,
      isMobileMenuOpen,
      modalOpen,
      screen,
      openIcon,
    } = this.state;
    const isSmallScreen = window.innerWidth < 768;
    const textColor = isSmallScreen ? "black" : navbarColor;
    return (
      <>
        {modalOpen && (
          <Modal
            onCloseModal={this.handleModalClose}
            onDecline={this.handleDecline}
            onAccept={this.handleAccept}
            heading={this.renderHeading(screen)}
            children={<div>{this.handleFooterdata(this.state.screen)}</div>}
          />
        )}
        <div id="website">
          <div className="website">
            <section id="website-header">
              <nav
                className={`websiteHeader ${
                  navbarColor === "black" ? "dark-bg" : "light-bg"
                }`}
              >
                <div>
                  <img
                    src={companyFullLogo}
                    alt="Company logo"
                    className="companylogo"
                  />
                </div>

                <div
                  className="mobileMenuButton"
                  onClick={this.toggleMobileMenu}
                >
                  <i class="fa-solid fa-bars"></i>
                </div>
                <div
                  className={`websiteNavs ${isMobileMenuOpen ? "show" : ""}`}
                >
                  <div
                    className={`websitebtn ${isMobileMenuOpen ? "show" : ""}`}
                    onClick={this.toggleMobileMenu}
                  >
                    {" "}
                    <button>
                      {" "}
                      <i className="fa fa-close"></i>
                    </button>
                  </div>
                  <a href="#home" style={{ color: textColor }}>
                    {" "}
                    Home
                  </a>
                  <a href="#about" style={{ color: textColor }}>
                    {" "}
                    About Us
                  </a>
                  <a href="#products" style={{ color: textColor }}>
                    {" "}
                    Products
                  </a>
                  <a href="#features" style={{ color: textColor }}>
                    {" "}
                    Features
                  </a>
                  <a href="#contact" style={{ color: textColor }}>
                    {" "}
                    Contact Us
                  </a>
                  {window.innerWidth < 768 && (
                    <>
                      <div className="iconWithLink">
                        <img
                          src={loginwhite_ic}
                          alt="Login Icon"
                          className="icon"
                          style={{
                            filter: `invert(${
                              textColor === "black" ? "100%" : "0%"
                            })`,
                          }}
                        />
                        <Link to={"/login"} style={{ color: textColor }}>
                          Login
                        </Link>
                      </div>
                      <div className="iconWithLink">
                        <img
                          src={signupwhite_ic}
                          alt="Signup Icon"
                          className="icon"
                          style={{
                            filter: `invert(${
                              textColor === "black" ? "100%" : "0%"
                            })`,
                          }}
                        />
                        <Link to={"/signup"} style={{ color: textColor }}>
                          Signup
                        </Link>
                      </div>
                    </>
                  )}
                </div>
                <div className="websiteHeaderRight">
                  <div className="WebsiteLogin ">
                    <img
                      src={loginwhite_ic}
                      alt="Login Icon"
                      className="icon"
                      style={{
                        filter: `invert(${
                          navbarColor === "black" ? "100%" : "0%"
                        })`,
                        color: navbarColor,
                      }}
                    />
                    <Link to={"/login"} style={{ color: textColor }}>
                      Login
                    </Link>
                  </div>
                  <div className="WebsiteSignup">
                    <img
                      src={signupwhite_ic}
                      alt="Signup Icon"
                      className="icon"
                      style={{
                        filter: `invert(${
                          navbarColor === "black" ? "100%" : "0%"
                        })`,
                        color: navbarColor,
                      }}
                    />
                    <Link to={"/signup"} style={{ color: textColor }}>
                      Signup
                    </Link>
                  </div>
                </div>
              </nav>
            </section>
            {/* -------------------------------------------------------------------------------------------------- */}
            <section id="home">
              <div className="home-text-background">
                <span>
                  <div>One API, Multiple Payment Possibilities!</div>
                  <div className="transition-text">
                    {this.state.currentText}
                  </div>
                </span>
              </div>
              <div className="video-background">
                <div className="home_intro_videos">
                  <video
                    className="intro"
                    ref={this.introVideoRef}
                    muted
                    playsInline
                    autoPlay
                  >
                    <source src={introVideo} type="video/webm" />
                  </video>
                  <video
                    className="intro-loop"
                    ref={this.loopVideoRef}
                    muted
                    playsInline
                    loop
                    autoPlay
                  >
                    <source src={loopVideo} type="video/webm" />
                  </video>
                </div>
              </div>
            </section>
            {/* -------------------------------------------------------------------------------------------------- */}
            <section id="about" ref={this.aboutRef}>
              <div
                className={`about ${
                  isVisible ? "transaction-animation" : "hidden"
                }`}
              >
                <div className="about-content">
                  <div className="vertical-ruler1"></div>
                  <div className="about-head">Who are we?</div>
                  <div className="vertical-ruler2"></div>
                  <div className="about-subhead-container">
                    <div className="horizontal-ruler1"></div>
                    <div className="about-subhead">
                      Your One-Stop Payment Gateway for All Devices
                    </div>
                    <div className="horizontal-ruler1"></div>
                  </div>

                  <div className="vertical-ruler2"></div>
                  <div className="about-mid">
                    Our mission keeps us focused and accountable, our vission
                    drives us and our values dictate how we succeed.
                    <br />
                    To best understand HOW we are different, we invite you to
                    learn about our story...
                  </div>
                  <div className="vertical-ruler1"></div>
                  <div className="about-para">
                    <h1>OUR STORY</h1>
                    <div className="about-line"></div>
                    <p>
                      Since our inception, Centpays has set out to disrupt the
                      payments industry. Purposefully designed to ensure swift
                      and reliable transactions, offering a user-friendly
                      experience for both businesses and consumers. <br />{" "}
                      <br />
                      What sets Centpays apart is our dedication to innovation.
                      We continually evolve to incorporate the latest
                      advancements in financial technology, providing you with a
                      future-proof payment solution.
                      <br /> <br /> Our team of experts is passionate about
                      simplifying the payment process, ensuring that businesses
                      of all sizes can thrive in the digital economy. Join us on
                      the journey towards a frictionless financial future, where
                      payments are efficient, secure, and tailored to your
                      business requirements.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* -------------------------------------------------------------------------------------------------- */}
            <section id="products">
              <div className="products-head">
                what <span className="products-headword">WE</span> have <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;to{" "}
                <span className="headword">OFFER</span>
              </div>
              <div className="products-content">
                <div className="products-left-section">
                  <video
                    className="product-videos"
                    muted
                    playsInline
                    loop
                    autoPlay
                  >
                    <source src={cards_video} type="video/mp4" />
                  </video>

                  <div className="product-description">
                    <div className="product-description-head">
                      <h3>Diverse</h3>
                      <img src={wiredstars} alt="wiredstars"></img>
                    </div>

                    <h1>Alternative Payment Methods</h1>
                    <p>
                      Integrate APM's and make a big distinction in the ease of
                      acceptance of alternative payments.
                    </p>
                  </div>
                  <video
                    className="product-videos"
                    muted
                    playsInline
                    loop
                    autoPlay
                  >
                    <source src={whitelable_video} type="video/mp4" />
                  </video>
                  <div className="product-description">
                    <div className="product-description-head">
                      <h3>Virtual</h3>
                      <img src={wiredglobe} alt="wiredglobe"></img>
                    </div>

                    <h1>Crypto Payment Processing</h1>
                    <p>
                      Maintain the anonymity of your users through no obligation
                      of authentication via KYC or registration.
                    </p>
                  </div>
                  <video
                    className="product-videos"
                    muted
                    playsInline
                    loop
                    autoPlay
                  >
                    <source src={Cashier} type="video/mp4" />
                  </video>
                </div>
                <div className="poducts-middle-section">
                  <div className="products-diamond-symbol">
                    <img src={star} alt=""></img>
                    <img src={star} alt=""></img>
                    <img src={star} alt=""></img>
                    <img src={star} alt=""></img>
                  </div>
                  <div className="products-ruler"></div>
                </div>
                <div className="products-right-section">
                  <div className="product-description">
                    <div className="product-description-head">
                      <h3>Subtle </h3>
                      <img src={wiredcoins} alt="wiredcoins"></img>
                    </div>
                    <h1>Credit and Debit Card Processing</h1>
                    <p>
                      Approve payments from all preeminent credit and debit card
                      networks and also accept international card payments.
                    </p>
                  </div>
                  <video
                    className="product-videos"
                    muted
                    playsInline
                    loop
                    autoPlay
                  >
                    <source src={apms_video} type="video/mp4" />
                  </video>
                  <div className="product-description">
                    <div className="product-description-head">
                      <h3>Customized </h3>
                      <img src={wiredinterface} alt="wiredinterface"></img>
                    </div>

                    <h1>White Label Payment Gateway</h1>
                    <p>
                      Choosing the right Payment Gateway is a necessity and an
                      essential part in order to make sure your expansion of the
                      business doesn’t take a halt.
                    </p>
                  </div>
                  <video
                    className="product-videos"
                    muted
                    playsInline
                    loop
                    autoPlay
                  >
                    <source src={crypto_video} type="video/mp4" />
                  </video>
                  <div className="product-description">
                    <div className="product-description-head">
                      <h3>Snap</h3>
                      <img src={diagram} alt="diagram"></img>
                    </div>
                    <h1>Multiple Cashier under single integration</h1>
                    <p>
                      Centpays' Cashier Platform streamlines business
                      transactions and ensures secure customer checkouts through
                      a unified interface.
                    </p>
                  </div>
                </div>
              </div>
              <div className="products-footer">
                <span>
                  {/* 1st */}
                  <div className="products-footer-images-container">
                    <div className="products-footer-images">
                      <img src={curr1} alt=""></img>
                      <img src={curr2} alt=""></img>
                      <img src={curr3} alt=""></img>
                      <img src={curr4} alt=""></img>
                    </div>
                    <div className="products-footer-images">
                      <img src={curr5} alt=""></img>
                      <img src={curr6} alt=""></img>
                      <img src={curr7} alt=""></img>
                      <img src={curr8} alt=""></img>
                    </div>
                    <div className="products-footer-images">
                      <img src={curr9} alt=""></img>
                      <img src={curr10} alt=""></img>
                      <img src={curr11} alt=""></img>
                      <img src={curr12} alt=""></img>
                    </div>
                    <div className="products-footer-images">
                      <img src={curr13} alt=""></img>
                      <img src={curr14} alt=""></img>
                      <img src={curr15} alt=""></img>
                      <img src={curr16} alt=""></img>
                    </div>
                    <div className="products-footer-images">
                      <img src={curr17} alt=""></img>
                      <img src={curr18} alt=""></img>
                      <img src={curr19} alt=""></img>
                      <img src={curr20} alt=""></img>
                    </div>
                  </div>
                  {/* 2nd */}
                  <div className="products-footer-images-container scroll2animation">
                    <div className="products-footer-images">
                      <img src={curr1} alt=""></img>
                      <img src={curr2} alt=""></img>
                      <img src={curr3} alt=""></img>
                      <img src={curr4} alt=""></img>
                    </div>
                    <div className="products-footer-images">
                      <img src={curr5} alt=""></img>
                      <img src={curr6} alt=""></img>
                      <img src={curr7} alt=""></img>
                      <img src={curr8} alt=""></img>
                    </div>
                    <div className="products-footer-images">
                      <img src={curr9} alt=""></img>
                      <img src={curr10} alt=""></img>
                      <img src={curr11} alt=""></img>
                      <img src={curr12} alt=""></img>
                    </div>
                    <div className="products-footer-images">
                      <img src={curr13} alt=""></img>
                      <img src={curr14} alt=""></img>
                      <img src={curr15} alt=""></img>
                      <img src={curr16} alt=""></img>
                    </div>
                    <div className="products-footer-images">
                      <img src={curr17} alt=""></img>
                      <img src={curr18} alt=""></img>
                      <img src={curr19} alt=""></img>
                      <img src={curr20} alt=""></img>
                    </div>
                  </div>
                </span>
                <span>
                  {/* 3rd */}
                  <div className="products-footer-images-container">
                    <div className="products-footer-images">
                      <img src={curr1} alt=""></img>
                      <img src={curr2} alt=""></img>
                      <img src={curr3} alt=""></img>
                      <img src={curr4} alt=""></img>
                    </div>
                    <div className="products-footer-images">
                      <img src={curr5} alt=""></img>
                      <img src={curr6} alt=""></img>
                      <img src={curr7} alt=""></img>
                      <img src={curr8} alt=""></img>
                    </div>
                    <div className="products-footer-images">
                      <img src={curr9} alt=""></img>
                      <img src={curr10} alt=""></img>
                      <img src={curr11} alt=""></img>
                      <img src={curr12} alt=""></img>
                    </div>
                    <div className="products-footer-images">
                      <img src={curr13} alt=""></img>
                      <img src={curr14} alt=""></img>
                      <img src={curr15} alt=""></img>
                      <img src={curr16} alt=""></img>
                    </div>
                    <div className="products-footer-images">
                      <img src={curr17} alt=""></img>
                      <img src={curr18} alt=""></img>
                      <img src={curr19} alt=""></img>
                      <img src={curr20} alt=""></img>
                    </div>
                  </div>
                  {/* 4th */}
                  <div className="products-footer-images-container scroll2animation">
                    <div className="products-footer-images">
                      <img src={curr1} alt=""></img>
                      <img src={curr2} alt=""></img>
                      <img src={curr3} alt=""></img>
                      <img src={curr4} alt=""></img>
                    </div>
                    <div className="products-footer-images">
                      <img src={curr5} alt=""></img>
                      <img src={curr6} alt=""></img>
                      <img src={curr7} alt=""></img>
                      <img src={curr8} alt=""></img>
                    </div>
                    <div className="products-footer-images">
                      <img src={curr9} alt=""></img>
                      <img src={curr10} alt=""></img>
                      <img src={curr11} alt=""></img>
                      <img src={curr12} alt=""></img>
                    </div>
                    <div className="products-footer-images">
                      <img src={curr13} alt=""></img>
                      <img src={curr14} alt=""></img>
                      <img src={curr15} alt=""></img>
                      <img src={curr16} alt=""></img>
                    </div>
                    <div className="products-footer-images">
                      <img src={curr17} alt=""></img>
                      <img src={curr18} alt=""></img>
                      <img src={curr19} alt=""></img>
                      <img src={curr20} alt=""></img>
                    </div>
                  </div>
                </span>
              </div>
            </section>
            {/* -------------------------------------------------------------------------------------------------- */}
            <section id="features">
              <div className="features">
                <div className="features-display-left">
                  <div>
                    <div className="features-head">
                      What sets us <br />
                      <span className="headword">APART</span>
                    </div>
                    <p>
                      We’re more than a payments partner. Get smoother payment
                      processes and offer an outstanding experience
                    </p>
                    <div className="features-display-left-cards">
                      <div
                        className="features-card"
                        onClick={() => this.handleImageClick(0)}
                      >
                        <div>
                          <span>
                            <img
                              src={moeny_ic}
                              className="icon"
                              alt="money proccessing icon"
                            />
                          </span>
                        </div>
                        <h2>Manage your money, your way</h2>
                      </div>
                      <div
                        className="features-card"
                        onClick={() => this.handleImageClick(1)}
                      >
                        <div>
                          <span>
                            <img
                              src={dashboard_ic}
                              className="icon"
                              alt="money proccessing icon"
                            />
                          </span>
                        </div>
                        <h2>Insights to power your business</h2>
                      </div>
                      <div
                        className="features-card"
                        onClick={() => this.handleImageClick(3)}
                      >
                        <div>
                          <span>
                            <img
                              src={api_ic}
                              className="icon"
                              alt="money proccessing icon"
                            />
                          </span>
                        </div>
                        <h2>Single Api with multiple payment solution</h2>
                      </div>
                      <div
                        className="features-card"
                        onClick={() => this.handleImageClick(2)}
                      >
                        <div>
                          <span>
                            <img
                              src={server_ic}
                              className="icon"
                              alt="money proccessing icon"
                            />
                          </span>
                        </div>
                        <h2>Total flexibility in payment modes</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features-display-right">
                  <div className="gallery-container">
                    <div className="features-display-right-container">
                      {images.map((image, index) => (
                        <div
                          key={index}
                          className={`gallery-image ${
                            currentImageIndex === index ? "selected" : ""
                          }`}
                          onClick={() => this.handleImageClick(index)}
                        >
                          <img src={image} alt={`Feature video ${index + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* -------------------------------------------------------------------------------------------------- */}
            <section className="earth">
              <div className="earth-left-container">
                <div className="earth-heading">Go GLOBAL with us!</div>
                <div className="earth-content">
                  <div className="earth-content-box">
                    <h1>{this.state.currenciesCount}+</h1>
                    <h3>CURRENCY</h3>
                    <p>
                      Accommodates a wide array of currencies, ensuring global
                      accessibility
                    </p>
                  </div>
                  <div className="earth-content-box">
                    <h1>{this.state.paymentMethodsCount}+</h1>
                    <h3>PAYMENT METHODS</h3>
                    <p>
                      Multiple payment options, catering to diverse user
                      preferences
                    </p>
                  </div>
                  <div className="earth-content-box">
                    <h1>{this.state.countriesCount}+</h1>
                    <h3>COUNTRIES</h3>
                    <p>
                      Spans across numerous countries, facilitating transactions
                      worldwide
                    </p>
                  </div>
                  <div className="earth-content-box">
                    <h1>{this.state.customersCount}+</h1>
                    <h3>CLIENTS</h3>
                    <p>
                      Serving a wide spectrum of clients and ensuring
                      satisfaction
                    </p>
                  </div>
                </div>
              </div>
              <div className="earth-right-container">
                <Canvas
                  className="globe-canvas"
                  camera={{ fov: 75, position: [0, 0, 5] }}
                  gl={{ antialias: true }}
                >
                  <ambientLight />
                  <pointLight position={[10, 10, 10]} />
                  <CPGlobe className="cp-globe" />
                </Canvas>
              </div>
            </section>
            {/* -------------------------------------------------------------------------------------------------- */}
            <section id="contact">
              <div className="contactus">
                <div className="container">
                  <div className="containeer">
                    <h3>Lets join with us</h3>
                    <p>
                      Join in advancing modern company with creative ideas and
                      go together
                    </p>
                    <div className="containeer-button">
                      <button className="contactButton">
                        Contact
                        <div className="iconButton">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="sidecontainner">
                    <form className="form" onSubmit={this.submitHandler}>
                      <div className="formgroup1">
                        <input
                          type="text"
                          id="name"
                          className="forminput"
                          placeholder="NAME..."
                          value={this.state.name}
                          onChange={this.changeHandler}
                          required
                        />
                        <input
                          type="text"
                          id="skypeID"
                          className="forminput"
                          placeholder="SKYPE ID..."
                          value={this.state.skypeID}
                          onChange={this.changeHandler}
                          required
                        />
                      </div>
                      <div className="formgroup">
                        <input
                          type="email"
                          id="email"
                          className="forminput"
                          placeholder="EMAIL..."
                          value={this.state.email}
                          onChange={this.changeHandler}
                          required
                        />
                      </div>
                      <div className="formgroup">
                        <textarea
                          rows="4"
                          cols="50"
                          id="message"
                          className="formtextarea"
                          placeholder="MESSAGE"
                          value={this.state.message}
                          onChange={this.changeHandler}
                        ></textarea>
                      </div>
                      <div className="formgroup">
                        <button className="contactButton" type="submit">
                          Send
                          <div className="iconButton">
                            <i className="fa-sharp fa-solid fa-paper-plane"></i>
                          </div>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            {/* -------------------------------------------------------------------------------------------------- */}
            <section id="Footer">
              <div>
                <div className="Footer">
                  <div className="footer-content">
                    <div className="websiteBG-Header-logo"></div>
                    <div className="footer-section s1">
                      <h3>Company</h3>
                      <ul>
                        <li>About Us</li>
                        <li>Our Products</li>
                        <li>Contact</li>
                        <li>Application Form</li>
                      </ul>
                    </div>
                    <div className="footer-section s2">
                      <h3>Products</h3>
                      <ul>
                        <li>Credit & Debit Processing</li>
                        <li>White Label Payment Gateway</li>
                        <li>Alternative Payment Methods</li>
                        <li>Crypto Payment Processing</li>
                      </ul>
                    </div>
                    <div className="footer-section s3">
                      <h3>Terms & Policies</h3>
                      <ul>
                        <li onClick={() => this.handleModalOpen(1)}>
                          Terms & Conditions
                        </li>
                        <li onClick={() => this.handleModalOpen(2)}>
                          Privacy Policy
                        </li>
                        <li onClick={() => this.handleModalOpen(3)}>
                          Cookies Policy
                        </li>
                      </ul>
                    </div>
                    <div className="footer-section s4">
                      <h3 className="h3">
                        Stay on top of things, Subscribe us.
                      </h3>
                      <input
                        className="formfield"
                        type="text"
                        name="Email"
                        placeholder="Enter your email id"
                      />
                      <button
                        type="submit"
                        className="btn-pink"
                        id="submit-btn"
                      >
                        Send Message{" "}
                        <i className="submit-icon fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>

                  <div className="Logo-container"></div>

                  <div className="footer-bottom">
                    <div className="footer-container ">
                      <div className="cards-icons">
                        <img src={visa} alt="visa"></img>
                        <img src={mastercard} alt="mastercard"></img>
                        <img src={jcb} alt="mastercard"></img>
                        <img src={unionpay} alt="mastercard"></img>
                        <img src={discover} alt="mastercard"></img>
                        <img src={pcidss} alt="mastercard"></img>
                      </div>
                    </div>
                    <div className="line " />

                    <p className="company-declaration">
                      ©2023 Centpays | All Rights Reserved «
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <div>
              <div className="social-icons">
                <a
                  className="btn btn-outline btn-floating"
                  href="#!"
                  role="button"
                  onClick={() => this.toggleiconlink("skype")}
                >
                  <i className="fa-brands fa-skype"></i>
                </a>

                <a
                  className="btn btn-outline btn-floating"
                  href="#!"
                  role="button"
                  onClick={() => this.toggleiconlink("google")}
                >
                  <i className="fa-brands fa-google"></i>
                </a>

                <a
                  className="btn btn-outline btn-floating"
                  href="#!"
                  role="button"
                  onClick={() => this.toggleiconlink("linkedin")}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                  className="btn btn-outline btn-floating"
                  href="#!"
                  role="button"
                  onClick={() => this.toggleiconlink("telegram")}
                >
                  <i className="fa-brands fa-telegram"></i>
                </a>

                {this.state.isSocialMediaToggled && (
                  <div
                    className={`icon-box ${openIcon ? `open-${openIcon}` : ""}`}
                   >
                    <div onClick={() => this.toggleiconlink(null)}>
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                    {openIcon === "skype" && (
                      <div>
                        <span>live:.cid.b31237494431be4a</span>
                        <button
                          onClick={() =>
                            this.copyToClipboard("live:.cid.b31237494431be4a")
                          }
                          className="copy-btn"
                        >
                          <i className="fa-regular fa-copy"></i>
                        </button>
                      </div>
                    )}
                    {openIcon === "google" && (
                      <div>
                        <span>info@centpays.com</span>
                        <button
                          onClick={() =>
                            this.copyToClipboard("info@centpays.com")
                          }
                          className="copy-btn"
                        >
                          <i className="fa-regular fa-copy"></i>
                        </button>
                      </div>
                    )}
                    {openIcon === "linkedin" && (
                      <div>
                        <span>Centpays-linkedIn</span>
                        <button
                          onClick={() =>
                            this.copyToClipboard("Centpaus-linkedIn")
                          }
                          className="copy-btn"
                        >
                          <i className="fa-regular fa-copy"></i>
                        </button>
                      </div>
                    )}
                    {openIcon === "telegram" && (
                      <div>
                        <span>@Cent908</span>
                        <button
                          onClick={() => this.copyToClipboard("@Cent908")}
                          className="copy-btn"
                        >
                          <i className="fa-regular fa-copy"></i>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Website;
