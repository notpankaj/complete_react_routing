import { useEffect } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import EditProdile from "../components/EditProdile";
import ViewProfile from "../components/ViewProfile";

const Profile = ({auth}) => {

    const history = useHistory();
    
    useEffect(() => {
        window.scroll(0,0);
        // if(!auth) history.push('/'); 
        if(!auth) history.push('/') 
    }, [])


    const { path, url } =  useRouteMatch();

    console.log(useRouteMatch())

    return (
        <>
            <h1>profile page</h1>

            <ul>
                <li>
                    <Link to={`${url}/viewprofile`} >View</Link>
                </li>
                <li>
                    <Link to={`${url}/editprofile`}>Edit Profile</Link>
                </li>
            </ul>


            <Switch>
                <Route path={`${path}/viewprofile`} component={ViewProfile} />
                <Route path={`${path}/editprofile`} component={EditProdile} />
            </Switch>

        </>
    )
}

export default Profile
