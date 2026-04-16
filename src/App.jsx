import Hero from "./components/Hero/Hero"
import Input from "./components/Input/Input"
import MainBtn from "./components/MainBtn/MainBtn"
import Nav from "./components/Nav/Nav"
import Title from "./components/Title/Title"
import Header from "./components/Header/Header"
import PostsSection from "./components/PostsSection/PostsSection"
import Post from "./components/Post/Post"
import Footer from "./components/Footer/Footer"
import PopUp from "./components/PopUp/PopUp"
import LinkRouter from "./components/LinkRouter/LinkRouter"
import { useState } from "react"
import Menu from "./components/Menu/Menu"

export default function App() {
  ///// Popup visibility states
  const [showSignIn, setShowSignIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  
  ///// Scroll lock functions to disable body scroll when popup open
  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }
  
  const unlockScroll = () => {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }
  
  //// Toggle Sign In popup, close Sign Up if open, lock/unlock scroll
  const toggleSignIn = () => {
    const isOpeningSignIn = !showSignIn;
    setShowSignIn(!showSignIn);
    setShowSignUp(false);
    setShowMenu(false)
    if (isOpeningSignIn) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu)
    const isOpeningMenu = !showMenu;
      if(showSignIn || showSignUp){
      setShowMenu(false)
    }
    if (isOpeningMenu) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }
  
  ///// Input data for signIn popup
  const signInInput = [ 
    {
      type: "email",
      placeholder: "Enter your email"
    },
    {
      type: "password",
      placeholder: "Enter your password"
    }
  ]
  ///// Input data for signUp popup
  const signUpInput = [
    {
      type: "text",
      placeholder: "Enter your username"
    },
    {
      type: "email",
      placeholder: "Enter your email"
    },
    {
      type: "password",
      placeholder: "Enter your password"
    }
  ]
  
  return(
    <>
      <Header>
        {/* Conditional popups rendered inside Header/Nav  */}
        {/* if the showsignin is true show the sign in popup */}
        {showSignIn && (
          <PopUp setShow={setShowSignIn}>
            <Title title="Sign In" subTitle="Enter your email and password to sign in !"/>
            {signInInput.map((input, index) => (
              <Input key={index} type={input.type} placeholder={input.placeholder} />
            ))}
            <MainBtn Btn="Sign In"/>
            <LinkRouter 
              link="Sign Up" 
              onClick={() => {
                // close the sign in and open the sign up
                setShowSignIn(false)
                setShowSignUp(true)
              }}
            />
          </PopUp>
        )}
        {/* if the showSignUp is true show the sign up popup */}
        {showSignUp && (
          <PopUp setShow={setShowSignUp}>
            <Title title="Sign Up" subTitle="Enter your email and username , password to sign up!"/>
            {signUpInput.map((input, index) => (
              <Input key={index} type={input.type} placeholder={input.placeholder} />
            ))}
            <MainBtn Btn="Sign Up"/>
            <LinkRouter 
              link="Sign In" 
              onClick={() => {
                // close the sign up and open the sign in
                setShowSignUp(false)
                setShowSignIn(true)
              }}
            />
          </PopUp>
        )}
        {/* if the showMenu is true show the Menu */}
        {showMenu && (
          <Menu
          setShowMenu={setShowMenu}
          logo="Your Name"
          links={[
            {
              title:"Home",
              active: true
            },
            {
              title:"About"
            }
          ]}
          >
            <MainBtn Btn="Sign In" onClick={toggleSignIn}/>
          </Menu>
        )}
        <Nav
          logo="Your Name"
          links={[
            {
              title:"Home",
              active: true
            },
            {
              title:"About"
            }
          ]}
          onclick={toggleMenu}
        >
          {/* Trigger Sign In popup */}
          <MainBtn Btn="Sign In" onClick={toggleSignIn}/>
        </Nav>
        <Hero>
          <Title
            title="Stories and interviews"
            subTitle="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
          />
          <div style={{display:"flex", gap:"16px" , alignItems:"center"}}>
            <Input 
              type="email"
              placeholder="Enter your email"
            />
            <MainBtn Btn="Subscribe"/>
          </div>
        </Hero>
      </Header>
      <PostsSection title="All Blog Posts">
        <Post
          info={[
            {
              src: "/assets/img/blog-img-1.png",
              date: "Alec Whitten • 1 Jan 2023",
              title: "Bill Walsh leadership lessons",
              subTitle: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
            },
            {
              src: "/assets/img/blog-img-2.png",
              date: "Demi WIlkinson • 1 Jan 2023",
              title: "PM mental models",
              subTitle: "Mental models are simple expressions of complex processes or relationships.",
            },
            {
              src: "/assets/img/blog-img-3.png",
              date: "Candice Wu • 1 Jan 2023",
              title: "What is Wireframing?",
              subTitle: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
            },
            {
              src: "/assets/img/blog-img-4.png",
              date: "Natali Craig • 1 Jan 2023",
              title: "How collaboration makes us better designers",
              subTitle: "Collaboration can make our teams stronger, and our individual designs better.",
            },
            {
              src: "/assets/img/blog-img-5.png",
              date: "Drew Cano • 1 Jan 2023",
              title: "Our top 10 Javascript frameworks to use",
              subTitle: "JavaScript frameworks make development easy with extensive features and functionalities.",
            },
            {
              src: "/assets/img/blog-img-6.png",
              date: "Orlando Diggs • 1 Jan 2023",
              title: "Podcast: Creating a better CX Community",
              subTitle: "Starting a community doesn’t need to be complicated, but how do you get started?",
            },
          ]}
        />
      </PostsSection>
      <Footer rights="© 2025 Blogs , vica web solutions"/>
    </>
  )
}
