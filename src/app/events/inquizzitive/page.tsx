"use client";
import EventNav from "./QuizNav";
import Footer from "./Footer.Inquizzitive";
import Faq from "./Faq.Inquizzitive";
import About from "./About.Inquizzitive";
import Rules from "./Rules.Inquizzitive";
import Team from "./EventLeads.Inquizzitive";
import Timeline from "./TimeLine.Inquizzitive"
import Mentors from "./Mentor.Inquizzitive";
import QuizMaster from "./QuizMaster";

function page() {
  return (
    <div className='bg-linear-to-br from-slate-800 to-blue-800 w-full min-h-screen'>
      <EventNav navTheme="bg-linear-to-t from-slate-800 to-blue-800"/>
      <About/>
      <Rules/>
      <Timeline />
      <Mentors />
      <QuizMaster/>
      <Team/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default page