import React from 'react'
import { BrowserRouter,Switch, Route, Link } from 'react-router-dom';
import Home_services from '../Services/home';
import ReactDOM from 'react-dom';
import Nos_Project from "../Services/Nos_Project";
import Actualites from '../Services/Actualites';
import Document from '../Services/Documents';
import 'bootstrap/dist/css/bootstrap.min.css';
import Q_somes_nous from '../Services/Q_somes_nous'
import Collaborateurs from '../Services/Collaborateurs';
import Programmes_rh from '../Services/programmes_rh';
import enquete from '../Services/enquete';
import RhInfo from '../Services/RhInfo';
import Singel_post from "../Services/Singel_post"
import Dashboard from "../ServicesDash/dashboard"
import Add_Post from '../ServicesDash/add_post';
import Home from '../ServicesDash/Posts'
import Projet from '../ServicesDash/project'
import docs from '../ServicesDash/docs'
import commentaires from '../ServicesDash/commentaires'
import rh_space from '../ServicesDash/rh_space'
import add_post_proj from '../ServicesDash/add_post_proj'
import add_doc from '../ServicesDash/add_doc'
import Empm from '../ServicesDash/empm'
import Enq_satic from '../ServicesDash/Enq_satis'
import rh_info from '../ServicesDash/rh_info'
import add_empm from '../ServicesDash/add_empm'
import add_rh_info from '../ServicesDash/add_rh_info'
import show_post from '../ServicesDash/show_post'
import show_proj from '../ServicesDash/show_proj'
import Show_doc from '../ServicesDash/show_doc'
import Show_rh_info from '../ServicesDash/show_rh_info'
import Show_empm from '../ServicesDash/show_empm'
import users from '../ServicesDash/users'
import login from '../components/login'
import IsAuth from '../AppServices/IsAuth';
import IsAdmin from '../AppServices/IsAdmin';
import email from '../e-mailing/email';
import lists from '../e-mailing/lists';
import add_mail from '../e-mailing/add_mail';
import show_list from '../e-mailing/show_list';
import operations from '../e-mailing/operations';
import Parametre from '../e-mailing/Parametre';
import add_mail_content from '../e-mailing/add_mail_content';
import Envoi from '../e-mailing/Envoi';
 function Index() {



  

    



    return (
        <BrowserRouter>
        <Switch>
      
 
    
            
        <IsAuth   path='/nos_project/:id' component={Singel_post} />
        <IsAuth   path='/nos_project/:id' component={Singel_post} />
        <IsAuth   path='/actualites/:id' component={Singel_post} />
        <IsAuth   path='/rhinfo/:id' component={Singel_post} />

                <IsAuth exact path="/posts" component={Home} />
                <IsAuth exact path="/services" component={Home_services} />
                <IsAuth path="/nos_project" component={Nos_Project} />
                <IsAuth path="/actualites" component={Actualites} />
                <IsAuth path="/documents" component={Document} />
                <IsAuth path="/q_somes_nous" component={Q_somes_nous} />
                <IsAuth path="/collaborateurs" component={Collaborateurs} />
                <IsAuth path="/programmes_rh" component={Programmes_rh} />
                <IsAuth path="/enquete" component={enquete} />
                <IsAuth  exect path="/rhinfo" component={RhInfo} />

                <IsAuth  exect path='/actualites/:id' component={Singel_post} />




              
            /*** dash */
            <Route  path='/users' component={users} />


                <IsAdmin  exect path='/Services_dash' component={Dashboard} />
                <IsAdmin  path='/add_post' component={Add_Post} />
                <IsAdmin exact path='/post' component={Home} />
                <IsAdmin  path='/show_post_s/:id?' component={show_post} />



                <IsAdmin  path='/project' component={Projet} />
                <IsAdmin  path='/show_project_s/:id?' component={show_proj} />
                <IsAdmin  path='/add_project' component={add_post_proj} />



                <IsAdmin  path='/docs' component={docs} />
                <IsAdmin  path='/add_doc' component={add_doc} />
                <IsAdmin  path='/show_doc/:id?' component={Show_doc} />


                <IsAdmin  path='/commentaires' component={commentaires} />


                <IsAdmin  path='/rh_space' component={rh_space} />


         


                <IsAdmin  path='/empm' component={Empm} />
                <IsAdmin  path='/add_empm' component={add_empm} />
                <IsAdmin  path='/show_empm/:id?' component={Show_empm} />



                <IsAdmin  path='/Enq_satis' component={Enq_satic} />


                <IsAdmin  path='/rh_info' component={rh_info} />
                <IsAdmin  path='/add_rh_info' component={add_rh_info} />
                <IsAdmin  path='/show_rh_info/:id?' component={Show_rh_info} />
               

                <Route  exect path='/add_mail' component={add_mail} />

          

                <Route  exect path='/login' component={login} />
                
                <Route  exect path='/email' component={email} />
                <Route  exect path='/lists' component={lists} />
                <Route  exect path='/show_list/:id?' component={show_list} />
                <Route  exect path='/operations' component={operations} />

                <Route  exect path='/add_content_mail/:id?' component={add_mail_content} />
                <Route exect  path='/mail_parametre/:id' component={Parametre} />

                <Route exect  path='/Envoi/:id?' component={Envoi} />
                


        </Switch>
        </BrowserRouter>
    )
}
export default Index
if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}