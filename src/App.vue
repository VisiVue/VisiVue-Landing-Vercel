<script setup>
import Button from 'primevue/button'
import { ref } from 'vue';

const getStartedWrapper = ref(null);
// const meetTheTeamWrapper = ref(null);

const scrollToGetStarted = () => {
  if (getStartedWrapper.value) {
    getStartedWrapper.value.scrollIntoView({ behavior: 'smooth' });
  }
};

// const scrollToAbout = () => {
//   if (meetTheTeamWrapper.value) {
//     meetTheTeamWrapper.value.scrollIntoView({ behavior: 'smooth' });
//   }
// };

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const linkToNewTab = (url) => {
  window.open(url, '_blank');
};
</script>
<!-- All this has is the routes -->
<template>
  <main id="banner">
    <nav>
      <div id="logo">
        <img src="./assets/logo.png" alt="VisiVue Open Source Product Logo" @click="backToTop" >
      </div>
      <div id="navMedia">
        <a href="https://www.linkedin.com/company/visivue/" target="_blank" rel="noopener">
          <img id="navLinkedIn" src="./assets/linkedin.png" alt="VisiVue LinkedIn Icon">
        </a>
        <a href="https://github.com/oslabs-beta/VisiVue" target="_blank" rel="noopener">
          <img id="navGitHub" src="./assets/github.png" alt="VisiVue GitHub Icon">
        </a>
        <a a href="https://twitter.com/VisiVueTeam" target="_blank" rel="noopener">
          <img id="navTwitter" src="./assets/twitter.png" alt="VisiVue Twitter Icon">
        </a>
      </div>
    </nav>
    <div id="divider"></div>
    <div id="header-wrapper">
      <!-- <img src="./assets/bgtest.jpeg" alt="background-pattern" id="backgroundPattern"> -->
      <h1>Welcome to VisiVue</h1>
      <h3>Stay organized and build with confidence.</h3>
      <!-- <h3>Confidence is the key to get a SWE job!!!</h3> -->
    </div>
    <div id="button-wrapper">
      <Button id="button" label="Blog Post" severity="" rounded @click="linkToNewTab('https://medium.com/@kaseynguyen0527/introducing-visivue-0-0-2-156ce3a8c780')"></Button>
      <Button id="button" label="VSCode Store" rounded @click="linkToNewTab('https://marketplace.visualstudio.com/items?itemName=VisiVue.VisiVue')"></Button>
      <!-- <Button id="button" label="Team" rounded @click="scrollToAbout"></Button> -->
      <Button id="button" label="Get Started" rounded style="background-color: #41b883;" @click="scrollToGetStarted"></Button>
    </div>
  </main>
  <div id="GetStarted-wrapper" ref="getStartedWrapper">
    <h2 class="sectionTitles"></h2>
    <div class="subSection">
      <div class="subSecText" v-motion-fade-visible>
        <h3 class="subSecH3" v-motion-fade-visible>Install VisiVue from VS Code's Marketplace</h3>
        <!-- <p class="subSecP">Placeholder</p> -->
      </div>
      <div class="subSecGif" v-motion-fade-visible>
        <img src="./assets/demo1.gif" alt="Demo 1 GIF" class="gifs"/>
      </div>
    </div>
    <div class="subSection">
      <div class="subSecGif" v-motion-fade-visible>
        <img src="./assets/demo2.gif" alt="Demo 2 GIF" class="gifs"/>
      </div>
      <div id="subSecTextR" v-motion-fade-visible>
        <h3 class="subSecH3" v-motion-fade-visible>Load the Extension</h3>
        <!-- <p class="subSecP">Placeholder</p> -->
      </div>
    </div>
    <div class="subSection">
      <div class="subSecText" v-motion-fade-visible>
        <h3 class="subSecH3" v-motion-fade-visible>Select Your File and Voilà!</h3>
        <!-- <p class="subSecP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rerum voluptatibus mollitia laborum provident tempora ex, alias tempore velit distinctio et reiciendis culpa vero voluptas consectetur consequuntur a suscipit corporis!</p> -->
      </div>
      <div class="subSecGif" v-motion-fade-visible>
        <img src="./assets/demo3.gif" alt="Demo 3 GIF" class="gifs"/>
      </div>
    </div>
  </div>
  <div id="MeetTheTeam-wrapper" ref="meetTheTeamWrapper">
    <h2 class="sectionTitles">Meet Our Team</h2>
    <div class="cardContainer">
      <div class="profileCards" v-motion-pop-visible-once>
        <img id="Abe" class="cardPhoto" src="./assets/abeprofile.jpeg" alt="Profile Pic of Abe Henderson, main contributor of VisiVue">
        <p class="cardName">Abe Henderson</p>
        <p class="cardTitle">Software Engineer</p>
        <div class="cardIcons">
          <a href="https://www.linkedin.com/in/abe-henderson-367638139/" target="_blank" rel="noopener" class="cardIconLinks">
            <img class="cardLinkedIn" src="./assets/linkedin.png" alt="VisiVue main contributor LinkedIn Icon" />
          </a>
          <a href="https://github.com/a-hend" target="_blank" rel="noopener" class="cardIconLinks">
            <img class="cardGitHub" src="./assets/github.png" alt="VisiVue main contributor GitHub Icon" />
          </a>
        </div>
      </div>
      <div class="profileCards" v-motion-pop-visible-once>
        <img id="Chris" class="cardPhoto" src="./assets/chrisprofile.jpeg" alt="Profile Pic of Christopher Park, main contributor of VisiVue">
        <p class="cardName">Christopher Park</p>
        <p class="cardTitle">Software Engineer</p>
        <div class="cardIcons">
          <a href="https://www.linkedin.com/in/christopherjcpark/" target="_blank" rel="noopener" class="cardIconLinks">
            <img class="cardLinkedIn" src="./assets/linkedin.png" alt="VisiVue main contributor LinkedIn Icon" />
          </a>
          <a href="https://github.com/ChristopherPark3" target="_blank" rel="noopener" class="cardIconLinks">
            <img class="cardGitHub" src="./assets/github.png" alt="VisiVue main contributor GitHub Icon" />
          </a>
        </div>
      </div>
      <div class="profileCards" v-motion-pop-visible-once>
        <img id="Kasey" class="cardPhoto" src="./assets/kaseyprofile.jpeg" alt="Profile Pic of Kasey Nguyen, main contributor of VisiVue">
        <p class="cardName">Kasey Nguyen</p>
        <p class="cardTitle">Software Engineer</p>
        <div class="cardIcons">
          <a href="https://www.linkedin.com/in/kaseynguyen0527/" target="_blank" rel="noopener" class="cardIconLinks">
            <img class="cardLinkedIn" src="./assets/linkedin.png" alt="VisiVue main contributor LinkedIn Icon" />
          </a>
          <a href="https://github.com/kaseydn" target="_blank" rel="noopener" class="cardIconLinks">
            <img class="cardGitHub" src="./assets/github.png" alt="VisiVue main contributor GitHub Icon" />
          </a>
        </div>
      </div>
      <div class="profileCards" v-motion-pop-visible-once>
        <img id="Ulf" class="cardPhoto" src="./assets/ulfprofile.jpeg" alt="Profile Pic of Ulf Wong, main contributor of VisiVue">
        <p class="cardName">Ulf Wong</p>
        <p class="cardTitle">Software Engineer</p>
        <div class="cardIcons">
          <a href="https://www.linkedin.com/in/ulf-wong/" target="_blank" rel="noopener" class="cardIconLinks">
            <img class="cardLinkedIn" src="./assets/linkedin.png" alt="VisiVue main contributor LinkedIn Icon" />
          </a>
          <a href="https://github.com/hkulf41" target="_blank" rel="noopener" class="cardIconLinks">
            <img class="cardGitHub" src="./assets/github.png" alt="VisiVue main contributor GitHub Icon" />
          </a>
        </div>
      </div>
      <div class="profileCards" v-motion-pop-visible-once>
        <img id="Yosuke" class="cardPhoto" src="./assets/yosukeprofilenew.jpeg" alt="Profile Pic of Yosuke Tomita, main contributor of VisiVue">
        <p class="cardName">Yosuke Tomita</p>
        <p class="cardTitle">Software Engineer</p>
        <div class="cardIcons">
          <a href="https://www.linkedin.com/in/yosuke-tomita-58617a82/" target="_blank" rel="noopener" class="cardIconLinks">
            <img class="cardLinkedIn" src="./assets/linkedin.png" alt="VisiVue main contributor LinkedIn Icon" />
          </a>
          <a href="https://github.com/yosuketomita" target="_blank" rel="noopener" class="cardIconLinks">
            <img class="cardGitHub" src="./assets/github.png" alt="VisiVue main contributor GitHub Icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div id="footer">
    <p class="footerText">VisiVue is licensed under the MIT License</p>
    <p class="footerText">VisiVue is an open source project developed under tech accelerator <a href="https://example.com" target="_blank" id="OSLink">OSLabs</a></p>
  </div>
</template>

<style>
@keyframes shake {
  10% {
    transform: translate3d(-1px, 0, 0);
  }
  20% {
    transform: translate3d(1px, 0, 0);
  }
  30%, 50% {
    transform: translate3d(-1.5px, 0, 0);
  }
  40% {
    transform: translate3d(1.5px, 0, 0);
  }
  60% {
    transform: translate3d(1px, 0, 0);
  }
  70% {
    transform: translate3d(-0.5px, 0, 0);
  }
  80% {
    transform: translate3d(0px, 0, 0);
  }
  90% {
    transform: translate3d(0, 0, 0);
  }
}
main {
  /* background-image: linear-gradient(180deg, #313131,#222222); */
  /* background-color: rgb(239, 239, 239); */
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
* {
  margin: 0;
  padding: 0;
  /* overflow: auto; */
  overflow-x: hidden;
}
nav {
  height: 7vh;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  justify-content: space-between;
  position: fixed;
  z-index: 2;
  border-bottom: 2px solid #bebebe62;
}
#logo {
  width: 100%;
  display: flex;
  align-content: start;
  justify-content: flex-start;
  /* height: 48px; */
  height: 42px;
  margin-left: 2rem;
  cursor: pointer;
}
#navMedia {
  /* border: 1px solid red; */
  margin-right: 40px;
  width: 100%;
  display: flex;
  align-content: end;
  justify-content: flex-end;
  margin-top: 4px;
  min-width: 10vw;
}
#navLinkedIn {
  margin-right: 1.5rem;
  /* height: 32px; */
  height: 24px;
  cursor: pointer;
}
#navGitHub {
  margin-right: 1.5rem;
  /* height: 32px; */
  height: 24px;
  cursor: pointer;
}
#navTwitter {
  /* height: 32px; */
  height: 24px;
  cursor: pointer;
}
#header-wrapper {
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-end;
  height: 35vh;
  margin-top: 20vh;
  z-index: 1;
}
h1 {
  font-size: 90px;
  color: white;
  font-family: 'Satoshi', sans-serif;  
  letter-spacing: -1.4px;
  background: -webkit-linear-gradient(#ffffff, #b6b6b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 6px rgba(0, 0, 0, .7) 0 4px 12px rgba(0, 0, 0, .7);
  font-weight: bold;
}
h3 {
  font-family: 'Satoshi', sans-serif;  
  color: rgb(158, 158, 158);
  font-size: 30px;
  margin-top: 10px;
  font-weight: bold;
}
#button-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* width: 38vw; */
  width: 31vw;
  min-height: 100px;
  padding: 25px 15px;
  margin-top: 20px
}
#button {
  background-color: #464646;
  /* background-color: #bbbbbb; */
  border: none;
}
Button:hover {
  box-shadow: rgba(69, 77, 84, 0.434) 0px 8px 24px;
}
#GetStarted-wrapper {
  /* border: 1px solid red; */
  height: 1580px;
  width: 100%;
  background-color: rgb(239, 239, 239);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.subSection {
  /* border: 1px solid red; */
  height: 500px;
  width: 90vw;
  padding-left: 2vw;
  padding-right: 2vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.subSecText {
  /* border: 1px solid red; */
  width: 45vw;
  height: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* padding-left: 20px; */
  padding-right: 23px;
}
#subSecTextR {
  /* border: 1px solid red; */
  width: 45vw;
  height: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 3vw;
  /* margin-right: 39px; */
}
.subSecH3 {
  /* border: 1px solid red; */
  font-size: 36px;
  margin: 20px;
}
/* .subSecP {
  font-family: 'Satoshi', sans-serif;
  font-size: 24px;
} */
.subSecGif {
  /* border: 1px solid red; */
  width: 60vw;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-content: center;
  /* transition: .3s ease; */
}
.subSecGif:hover {
  scale: 110%;
  transition: 0.3s;
  /* transform: scale(1.1); */
}
#MeetTheTeam-wrapper {
  /* border: 1px solid red; */
  height: 65vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  z-index: 0;
  font-family: 'Satoshi', sans-serif;
}
.sectionTitles {
  display: flex;
  justify-content: center;
  font-family: 'Satoshi', sans-serif;
  color: rgb(97, 97, 97);
  font-size: 50px;
  margin-top: 35px;
}
.cardContainer {
  /* border: 1px solid red; */
  height: 50vh;
  width: 80vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 2vh;
}
.profileCards {
  /* border: 1px solid red; */
  width: 180px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.cardPhoto {
  height: 170px;
  border-radius: 100%;
  border: 6px solid rgb(210, 210, 210);
}
.cardName {
  font-size: 24px;
}
.cardTitle {
  font-size: 18px;
  margin-bottom: 5px;
}
.cardIcons {
  /* background-color: red; */
  display: flex;
  justify-content: space-around;
  width: 70px;
}
.cardIconLinks {
  /* border: 1px solid red; */
  width: 30px;
  display: flex;
  justify-content: center;
}
.cardLinkedIn {
  height: 24px;
  cursor: pointer;
  padding: 0px
}
.cardLinkedIn:hover {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}
.cardGitHub {
  height: 24px;
  cursor: pointer
}
.cardGitHub:hover {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}
#footer {
  font-family: 'Satoshi', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color:#b6b6b6;
  background-color: #313131;
  height: 75px;
}
#OSLink {
  text-decoration: none;
  color: rgb(0, 157, 255);
}
</style>
