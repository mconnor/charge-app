import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from './pages/about.html.mdx'
import Projects from './pages/projects.html.mdx'
import Layout from "./layout.html.jsx"
import ButtonComponent from './button.html.jsx'


const color = 'white'



export default () => {
    return (
        <>
            <Layout 
                title="Sever Side Render with Charge"     
                >
                <p>New Charge Site</p>
                <ButtonComponent />
            </Layout>
            <Layout 
                title="Sever Side Render with Charge"     
            >
                <Projects />
            </Layout>
        </>
      )
  }