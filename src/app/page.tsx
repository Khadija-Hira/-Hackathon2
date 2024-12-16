import Main from "@/components/main";
import Header from "@/components/Header";
import Hero from "@/components/hero";
import Banner from "@/components/banner";
import Footer from "@/components/Footer";
import Newarrival from "./newarrival/page";
import Topselling from "./topselling/page";



export default function Home() {
  return (
    
   <div>
    
    <Main></Main>
    
     <Header></Header>

     <Hero></Hero>
    
     
    
    <Banner></Banner>
    
    <Newarrival></Newarrival>
    
    <Topselling></Topselling>
  
   
    <Footer></Footer>
    
    </div>
  
  );

}

