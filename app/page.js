import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { Discovery, Resume, Colleges, Employers, Support, Cta, Footer } from '../components/Sections';
import AppShowcase from '../components/AppShowcase';
export default function Home() {
  return (<><Navbar /><main><Hero /><Discovery /><Resume /><Colleges /><Employers /><AppShowcase /><Support /><Cta /></main><Footer /></>);
}
