// WRITTEN BY MEHMET BARAN ÖZDENİZ @ozdeniz.mb

import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux';

import Home from './views/Home/Home';
import About from './views/About/About';
import SignUp from './views/SignUp/SignUp';
import TopBar from './Components/TopBar';
import Contact from './views/Contact/Contact'
import UserPage from './views/UserProfile/UserPage';
import JobAdvertDetail from './views/JobAdvert/JobAdvertDetail';
import AdsPage from './views/AdsPage/AdsPage';
import PaymentPage from './views/Payment/PaymentPage';
import Login from './views/Login/Login';
import AdvertisementProceduresPage from './views/AdvertisementProcedures/AdvertisementProceduresPage';
import CreatedJobPosting from './Components/CreatedJobPosting';
import ApplicationAdmin from './views/AdvertApplicationAdmin/ApplicationAdmin';
import UserAcceptedJob from './views/UserAcceptedJob/UserAcceptedJob';
import WorkAttendanceConfirm from './Components/WorkAttendanceConfirm';
import JobFeedbackSend from './Components/JobFeedbackSend';

const App = () => {

  const { isLoggedIn } = useSelector(store => {
    return {
      isLoggedIn : store.isLoggedIn
    }
  });

  return(
    <div>

      <HashRouter>

        <TopBar />

        <Switch>
        <Route exact path="/" component={Home}/>

        {!isLoggedIn && (
          <Route path="/login" component={Login}/>
        )}

        <Route path="/signup" component={SignUp} />

        <Route path="/about" component={About} />

        <Route path="/ads-page" component={AdsPage} />

        <Route path="/contact" component={Contact} />

        <Route path="/profile/:email" component={UserPage} />

        <Route path="/procedures/:email/:id" component={AdvertisementProceduresPage}/>

        <Route path="/created/job-posting" component={CreatedJobPosting}/>

        <Route path="/jobadvert/:jobId" component={JobAdvertDetail} />

        <Route path="/job-application/:email/:id" component={ApplicationAdmin} />

        <Route path="/your-accepted/:email/:id" component={UserAcceptedJob} />

        <Route path="/confirm/otp-code/:jobId/:userId" component={WorkAttendanceConfirm} />

        <Route path="/feedback/:jobId/:userId" component={JobFeedbackSend}/>

        <Route path="/payment-page" component={PaymentPage}/>

        <Redirect to="/" />
        </Switch>

      </HashRouter>

    </div>
  );

}

export default App;